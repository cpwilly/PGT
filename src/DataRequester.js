const url = ''; //API endpoint URL

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