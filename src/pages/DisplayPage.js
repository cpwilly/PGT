import * as React from 'react';
import AggregatedReviews from '../components/AggregatedReviews';
import DormName from '../components/DormName';
import Table from '../components/Table';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { getDorm, getReview } from '../components/DataRequester';
import Review from '../components/Review';

// Might need to refactor to take into account await methods
function databaseReceive(name, jsonDormsPromise, jsonReviewsPromise) {
  let jsonDorm = jsonDormsPromise[0];
  let jsonReviews = jsonReviewsPromise;
  let totalRating = jsonDorm.fives * 5 + jsonDorm.fours * 4 + jsonDorm.threes * 3
    + jsonDorm.twos * 2 + jsonDorm.ones;
  let totalReviews = jsonDorm.fives + jsonDorm.fours + jsonDorm.threes + jsonDorm.twos + jsonDorm.ones;
  // Can't divide by zero
  if (totalReviews == 0) { var netTotalReviews = 1; }
  else { var netTotalReviews = totalReviews }
  // console.log('jsonDorm: ');
  // console.log(jsonDorm);
  // console.log('jsonReviews: ');
  // console.log(jsonReviews);

  let data = {
    name: jsonDorm.name,
    rating: (totalRating / netTotalReviews), //Needs to be calculated
    numReviews: totalReviews,
    // rating: 5, //Needs to be calculated
    // numReviews: 150,
    ones: jsonDorm.ones,
    twos: jsonDorm.twos,
    threes: jsonDorm.threes,
    fours: jsonDorm.fours,
    fives: jsonDorm.fives,
    reviews: jsonReviews
  };

  //console.log('data: ')
  //console.log(data);
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

function createData(review) {
  return { review };
}

function addReviews(reviews){
  let rows = []

  console.log(reviews);

  for(let i = 0; i < reviews.length; i++){
    rows = [...rows, createData(<Review
                       date={reviews[i].date}
                       numResidents={reviews[i].numResidents}
                       numBathrooms={reviews[i].numBathrooms}
                       description={reviews[i].description}
                       rating={reviews[i].rating}
                       />)];
  }

  return rows;
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
    reviews: [{
      date: '4/20/69',
      numResidents: '3',
      numBathrooms: 'Communal',
      description: 'jelly beans',
      rating: 5
    }, {
      date: '4/20/69',
      numResidents: '3',
      numBathrooms: 'Communal',
      description: 'jelly beans',
      rating: 5
    }]
  });
  let numEach = [data.fives, data.fours, data.threes, data.twos, data.ones];
  const [userInfo, setUserInfo] = React.useState({ attributes: { email: 'test@test.com' } });
  const [rows, setRows] = React.useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const jsonDormsPromise = await getDorm(props.name);
      const jsonReviewsPromise = await getReview(props.name);
      const info = await Auth.currentUserInfo();
      const data = databaseReceive(props.name, jsonDormsPromise, jsonReviewsPromise);
      setUserInfo(info);
      setData(data);
      setRows(addReviews(data.reviews));
    }
    fetchData();
  }, [setUserInfo, setData, setRows, props.name])

  return (
    <div className='bod'>
      <DormName dormName={props.name} />
      <AggregatedReviews email={userInfo.attributes.email} numReviews={data.numReviews} rating={data.rating} numEach={numEach} dormName={props.name} />
      <Table rows={rows} />
    </div>
  );
}

