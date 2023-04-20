import { DataStore } from '@aws-amplify/datastore';
import { Dorm } from './models';
import { Review } from './models';
import { Account } from './models';

// This is a GET request. We pass in a DataType to choose where our get comes from
// If we don't the method will fail
async function getData(DataType, tag) {
    try{
        // Need to test to ensure ENUMS work as expected
        const models;
        if(DataType == DataType.Dorm){
            models = await DataStore.query(Dorm, (c) => c.name.eq(tag));
        }
        else if (DataType == DataType.Review){
            models = await DataStore.query(Review, (c) => c.dorm.eq(tag));
        }
        else if (DataType == DataType.Account){
            models = await DataStore.query(Account);
        }
        return models;
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
