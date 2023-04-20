import * as React from 'react';
import AggregatedReviews from '../components/AggregatedReviews';
import DormName from '../components/DormName';
import Table from '../components/Table';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';

requester = new DataRequester();

// Might need to refactor to take into account await methods
function databaseReceive(name){
  jsonDorm = await requester.getData(DataType.Dorm, name);
  jsonReviews = await requester.getData(DataType.Review, name)
  let data = {
    name: jsonDorm.name,
    rating: jsonDorm.rating,
    numReviews: jsonReviews.length,
    ones: jsonDorm.ones,
    twos: jsonDorm.twos,
    threes: jsonDorm.threes,
    fours: jsonDorm.fours,
    fives: jsonDorm.fives,
    numEach: jsonDorm.numEach,
    wouldRoomAgain: jsonDorm.wouldRoomAgain,
    reviews: jsonReviews
  }; 

  return data;
}

export default function DisplayPage(props) {
  let data = databaseReceive(props.name);
  let numEach = [data.ones, data.twos, data.threes, data.fours, data.fives];
  const [userInfo, setUserInfo] = React.useState({attributes: {email: 'test@test.com'}});

  useEffect(() => {
    const fetchData = async () => {
      const info = await Auth.currentUserInfo()
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

