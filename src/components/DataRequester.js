import { DataStore } from '@aws-amplify/datastore';
import { Dorm } from '../models/index.js';
import { Review } from '../models/index.js';

// This is a GET request. We pass in a DataType to choose where our get comes from
// If we don't the method will fail
export async function getDorm(tag) {
    try {
        var models = await DataStore.query(Dorm, (c) => c.name.eq(tag));
        // console.log("Dorm Requested");

        return await models;
    } catch (Error) {
        console.log('error');
        console.log(Error);
    }
}

// Get request for a review
export async function getReview(tag) {
    try {
        var models = await DataStore.query(Review, (c) => c.dormName.eq(tag));
        // console.log("Review Requested");
        return await models;
    } catch (Error) {
        console.log('error');
        console.log(Error);
    }
}


/*
    dormName: dormName,
    date: new Date(),
    wouldRoomAgain: wouldRoomAgain,
    numResidents: numResidents,
    numBathrooms: numBathrooms,
    description: description,
    rating: rating,
    numLikes: numLikes,
    userEmail: userEmail

 */

// This is a POST request. We pass in a DataType to choose where our post goes to
// If we don't the method will fail
export async function postReview(JsonObject) {
    // console.log('JsonObject: ')
    // console.log(JsonObject);
    try {
        await DataStore.save(
            new Review({
                dormName: JsonObject.dormName,
                date: JsonObject.date,
                wouldRoomAgain: JsonObject.wouldRoomAgain,
                numResidents: JsonObject.numResidents,
                numBathrooms: JsonObject.numBathrooms,
                description: JsonObject.description,
                rating: JsonObject.rating,
                numLikes: JsonObject.numLikes,
                userEmail: JsonObject.userEmail
            })
        );
    } catch (Error) {
        console.log(Error);
    }
}

export async function deleteReview(dataId) {
    try {
        const modelToDelete = await DataStore.query(Review, dataId);
        console.log(modelToDelete[0]);
        DataStore.delete(modelToDelete[0]);
    } catch (Error) {
        console.log(Error);
    }
}

// This is a DELETE request.
export async function deleteDorm(dataType, dataId) {
    try {
        const modelToDelete = await DataStore.query(Dorm, dataId);
        DataStore.delete(modelToDelete);
    } catch (Error) {
        console.log(Error);
    }
}

//This is a PUT request (i.e. an update request)
export async function addRating(CURRENT_ITEM, rating) {
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item�s fields rather than mutating the instance directly */
    try {
        switch (rating) {
            case 1:
                await DataStore.save(Dorm.copyOf(CURRENT_ITEM, item => {
                    item.ones = CURRENT_ITEM.ones + 1;
                }));
                break;
            case 2:
                await DataStore.save(Dorm.copyOf(CURRENT_ITEM, item => {
                    item.twos = CURRENT_ITEM.twos + 1;
                }));
                break;
            case 3:
                await DataStore.save(Dorm.copyOf(CURRENT_ITEM, item => {
                    item.threes = CURRENT_ITEM.threes + 1;
                }));
                break;
            case 4:
                await DataStore.save(Dorm.copyOf(CURRENT_ITEM, item => {
                    item.fours = CURRENT_ITEM.fours + 1;
                }));
                break;
            case 5:
                await DataStore.save(Dorm.copyOf(CURRENT_ITEM, item => {
                    item.fives = CURRENT_ITEM.fives + 1;
                }));
                break;
            default:
                break;
        }
    } catch (Error) {
        console.log(Error);
    }
}

export default 'DataRequester';