import * as React from 'react';
import ReactDOM from "react-dom";
import AggregatedReviews from '../components/AggregatedReviews';
import DormName from '../components/DormName';
import Table from '../components/Table';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import DataRequester from '../components/DataRequester'
import DataType from '../components/DataType'
import Review from '../models/index'

// Might need to refactor to take into account await methods
async function databaseReceive(name) {
    let jsonDormsPromise = await DataRequester.getData(DataType.Dorm, name);
    let jsonReviewsPromise = await DataRequester.getData(DataType.Review, name);
    let jsonDorm = await jsonDormsPromise.json();
    let jsonReviews = await jsonReviewsPromise.json();
  let totalRating = await jsonDorm.fives.length * 5 + jsonDorm.fours.length * 4 + jsonDorm.threes.length * 3
        + jsonDorm.twos.length * 2 + jsonDorm.ones.length;


  let data = {
    name: jsonDorm.name,
    rating: (totalRating / jsonReviews.length), //Needs to be calculated
    numReviews: jsonReviews.length,
    ones: jsonDorm.ones,
    twos: jsonDorm.twos,
    threes: jsonDorm.threes,
    fours: jsonDorm.fours,
      fives: jsonDorm.fives,
      reviews: JSON.stringify(jsonReviews),
  }; 

    return data;

    // <Table reviews={data.reviews} />
    /*{data.reviews.map((Review, index) => {
    return (
        <div key={index}>
            <h2>review: {Review}</h2>
            <hr />
        </div>
        );
        })}*/

}

export default async function DisplayPage(props) {
  let data = await databaseReceive(props.name);
  let numEach = [data.ones, data.twos, data.threes, data.fours, data.fives];
  const [userInfo, setUserInfo] = React.useState({attributes: {email: 'test@test.com'}});

  useEffect(() => {
    const fetchData = /* async */ () => {
      const info = /*await*/ Auth.currentUserInfo()
      setUserInfo(info);
    }
    fetchData();
  }, [setUserInfo])

  return (
    <div className='bod'>
      <DormName dormName={props.name} />
      <AggregatedReviews email={userInfo.attributes.email} rating={data.rating} numReviews={data.numReviews} numEach={numEach} dormName={props.name}/>
      <Table reviews={data.reviews} />
    </div>
  );
}

