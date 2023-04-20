import * as React from 'react';
import AggregatedReviews from '../components/AggregatedReviews';
import DormName from '../components/DormName';
import Table from '../components/Table';

function databaseReceive(name){
  let data = {
    name: name,
    rating: 3.7,
    numReviews: 309,
    ones: 102,
    twos: 56,
    threes: 12,
    fours: 77,
    fives: 59,
    wouldRoomAgain: true,
    reviews: [
      {
        dormName: 'Taplin',
        date: '4/17/23',
        numResidents: 4,
        numBathrooms: 2,
        description: 'Shit ton of drain flies',
        rating: 1,
        userEmail: 'josh@case.edu'
      },
      {
        dormName: 'Taplin',
        date: '4/17/23',
        numResidents: 4,
        numBathrooms: 2,
        description: 'Shit ton of drain flies', 
        rating: 4,
        userEmail: 'carson@case.edu'
      } 
    ]
  }; 

  return data;
}


export default function DisplayPage(props) {
  let data = databaseReceive(props.name);
  let numEach = [data.ones, data.twos, data.threes, data.fours, data.fives];

  return (
    <div className='bod'>
      <DormName dormName={props.name}/>
      <AggregatedReviews rating={data.rating} numReviews={data.numReviews} numEach={numEach}/>
      <Table reviews={data.reviews}/>
    </div>
  );
}

