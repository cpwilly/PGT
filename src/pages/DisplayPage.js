import * as React from 'react';
import AggregatedReviews from '../components/AggregatedReviews';
import DormName from '../components/DormName';
import Table from '../components/Table';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { getDorm, getReview } from '../components/DataRequester';
import Review from '../components/review';


function calculateTotalReviews(jsonDorm) {
  return jsonDorm.fives + jsonDorm.fours + jsonDorm.threes + jsonDorm.twos + jsonDorm.ones;
}

// Might need to refactor to take into account await methods
function databaseReceive(name, jsonDormsPromise, jsonReviewsPromise) {

  let jsonDorm = jsonDormsPromise[0];
  let jsonReviews = jsonReviewsPromise;
  let totalRating = jsonDorm.fives * 5 + jsonDorm.fours * 4 + jsonDorm.threes * 3
    + jsonDorm.twos * 2 + jsonDorm.ones;
  let totalReviews = jsonDorm.fives + jsonDorm.fours + jsonDorm.threes + jsonDorm.twos + jsonDorm.ones;
  // Can't divide by zero
  if (totalReviews === 0) { var netTotalReviews = 1; }
  else { var netTotalReviews = totalReviews }
  // console.log('jsonDorm: ');
  // console.log(jsonDorm);
  // console.log('jsonReviews: ');
  // console.log(jsonReviews);

  let data = {
    name: jsonDorm.name,
    rating: (totalRating / netTotalReviews), //Needs to be calculated
    numReviews: totalReviews,
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

}

function createData(review) {
  return { review };
}

function addReviews(reviews)  {
  let rows = []

  // console.log(reviews);
  // console.log(reviews);

  for (let i = reviews.length-1; i >= 0; i--) {
    rows = [...rows, createData(<Review
      date={reviews[i].date}
      numResidents={reviews[i].numResidents}
      numBathrooms={reviews[i].numBathrooms}
      description={reviews[i].description}
      rating={reviews[i].rating}
      email={reviews[i].userEmail}
      id={reviews[i].id}
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
  const [numEach, setNumEach] = React.useState([data.fives, data.fours, data.threes, data.twos, data.ones]);
  const [userInfo, setUserInfo] = React.useState({ attributes: { email: 'test@test.com' } });
  const [rows, setRows] = React.useState([]);
  const [dbSend, setDbSend] = React.useState(false);
  const [dbFetch, setDbFetch] = React.useState(0);



  useEffect(() => {
    const fetchData = async () => {
      //console.log('fetched data');


      const info = await Auth.currentUserInfo();

      const jsonDormsPromise = await getDorm(props.name);
      const jsonReviewsPromise = await getReview(props.name);

      // console.log('jsonDormsPromise: ');
      // console.log(jsonDormsPromise);
      // console.log('jsonReviewsPromise: ');
      // console.log(jsonReviewsPromise);


      // while(jsonDormsPromise.length === 0){
      //   console.log('waiting for dorms');
      //   jsonDormsPromise = await getDorm(props.name);
      //   wait(5000);
      // }

      // while(calculateTotalReviews(jsonDormsPromise[0]) !== 0 && jsonReviewsPromise.length === 0){
      //   console.log('waiting for reviews');
      //   wait(1000);
      //   jsonReviewsPromise = await getReview(props.name);
      // }

      if((jsonDormsPromise.length === 0) || (calculateTotalReviews(jsonDormsPromise[0]) !== 0 && jsonReviewsPromise.length === 0)){
        setDbFetch(dbFetch => dbFetch + 1)
      }

      const data = databaseReceive(props.name, jsonDormsPromise, jsonReviewsPromise);

      // console.log('numEach: ');
      // console.log(numEach);
      // console.log('data: ');
      // console.log(data);
      setUserInfo(info);
      setData(data);
      setNumEach([data.fives, data.fours, data.threes, data.twos, data.ones]);
      setRows(addReviews(data.reviews));

    }
    fetchData();

  }, [setUserInfo, setData, setRows, setNumEach, setDbFetch, props.name, dbSend, dbFetch])

  function NoReviews({ revs }) {
    if (revs.length === 0){
      return <i>There are no reviews here. Be the first to leave a review!</i>;
    }
  }

  return (
    <div className='bod'>
      <DormName dormName={props.name} />
      <AggregatedReviews email={userInfo.attributes.email}
        numReviews={data.numReviews}
        rating={data.rating}
        numEach={numEach}
        dormName={props.name}
        setDbSend={setDbSend}
        dbSend={dbSend} />
      <NoReviews revs={rows} />
      <Table rows={rows} />
    </div>
  );
}

