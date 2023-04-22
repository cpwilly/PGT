import * as React from 'react';
import ReactDOM from "react-dom";
import AggregatedReviews from '../components/AggregatedReviews';
import DormName from '../components/DormName';
import Table from '../components/Table';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { getData } from '../components/DataRequester'
import DataType from '../components/DataType'
import Review from '../models/index'

// Might need to refactor to take into account await methods
function databaseReceive(name, jsonDormsPromise, jsonReviewsPromise) {
  let jsonDorm = jsonDormsPromise[0];
  let jsonReviews = jsonReviewsPromise;
  let totalRating = jsonDorm.fives.length * 5 + jsonDorm.fours.length * 4 + jsonDorm.threes.length * 3
    + jsonDorm.twos.length * 2 + jsonDorm.ones.length;
  console.log('jsonDorm: ');
  console.log(jsonDorm);
  console.log('jsonReviews: ');
  console.log(jsonReviews);

  let data = {
    name: jsonDorm.name,
    // rating: (totalRating / jsonReviews.length), //Needs to be calculated
    // numReviews: jsonReviews.length,
    rating: 5, //Needs to be calculated
    numReviews: 301,
    ones: jsonDorm.ones,
    twos: jsonDorm.twos,
    threes: jsonDorm.threes,
    fours: jsonDorm.fours,
    fives: jsonDorm.fives,
    reviews: JSON.stringify(jsonReviews)
  };

  console.log('data: ')
  console.log(data);
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

export default function DisplayPage(props) {
  const [data, setData] = React.useState({
    name: 'toast',
    rating: 5,
    numReviews: 1000,
    ones: 69,
    twos: 69,
    threes: 69,
    fours: 69,
    fives: 69,
    reviews: 0
  });
  let numEach = [data.fives, data.fours, data.threes, data.twos, data.ones];
  const [userInfo, setUserInfo] = React.useState({ attributes: { email: 'test@test.com' } });

  useEffect(() => {
    const fetchData = async () => {

      const jsonDormsPromise = await getData(DataType.Dorm, props.name);
      const jsonReviewsPromise = await getData(DataType.Review, props.name);
      const info = await Auth.currentUserInfo();
      const data = databaseReceive(props.name, jsonDormsPromise, jsonReviewsPromise);
      setUserInfo(info);
      setData(data);
    }
    fetchData();
  }, [setUserInfo, setData, props.name])

  return (
    <div className='bod'>
      <DormName dormName={props.name} />
      <AggregatedReviews email={userInfo.attributes.email} numReviews={data.numReviews} rating={data.rating} numEach={numEach} dormName={props.name}/>
      <Table reviews={data.reviews} />
    </div>
  );
}

