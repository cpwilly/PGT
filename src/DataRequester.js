import { DataStore } from '@aws-amplify/datastore';
import { Dorm } from './models';
import { Review } from './models';
import { Account } from './models';

const url = ''; //API endpoint URL

// This might all become static because it would make it so we don't have to instantiate this requester a ton
//Super basic get request
async function getReviews(){
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
}

//Basic post with try/catch
async function postData(){
    try{
        const reponse = await fetch(url, data = {}, {
            method: 'POST',
            body: JSON.stringify(data) //Will convert our data into a JSON object
        });
        const result = await response.json();
        console.log("Success", result);
    } catch (error){
        console.log("Error: ", error);
    }
}

/*Need to determine data type that amplify takes. Most likely will
need to serialize into a JSON object.
I believe the basic idea is that we will have to pass our data
from the methods they've made into here and work from there.
It shouldn't be too bad but it will take time to do right*/


//This section is for Amplify defined API calls

// This is a GET request. We pass in a DataType to choose where our get comes from
// If we don't the method will fail
async function getData(dataType){
    try{
        // Need to test to ensure ENUMS work as expected
        const models = await DataStore.query(dataType);
        console.log(models);
    } catch (Error){
        console.log(Error);
    }
}

//This is a POST request. We pass in a DataType to choose where our post goes to
//If we don't the method will fail
async function postData(dataType, JsonObject){
    try{
        await DataStore.save(
            new dataType({
                JsonObject
            })
        );
    } catch(Error){
        console.log(Error);
    }
}

//Ex JsonObject:
/*
    new Dorm({
		"Name": "Lorem ipsum dolor sit amet",
		"Year": "Lorem ipsum dolor sit amet",
		"NumResidents": NumPeople.ONE,
		"NumBathrooms": 1020,
		"Kitchen": true,
		"Refrigerator": true,
		"Microwave": true,
		"AirConditioning": true,
		"CommunityBathroom": true,
		"CommunityMicrowave": true,
		"CommunityKitchen": true,
		"Community": Community.CEDARMAGNOLIA
	})
*/


//This is a DELETE request.
async function deleteData(dataType, dataId){
    try{
        const modelToDelete = await DataStore.query(dataType, dataId);
        DataStore.delete(modelToDelete);
    } catch (Error){
        console.log(Error);
    }
}

//This is a PUT request (i.e. an update request)
async function updateData(dataType, CURRENT_ITEM){
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
    try{
        await DataStore.save(datType.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));
    } catch (Error){
        console.log(Error);
    }
}
