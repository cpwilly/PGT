import * as React from 'react';
import AggregatedReviews from './components/AggregatedReviews';
import DormName from './components/DormName';
import Table from './components/Table';

function databaseReceive(){
  let data = {
    name: 'Taplin House',
    rating: 3.7,
    numReviews: 309,
    //        5    4   3   2   1
    numEach: [106, 56, 12, 77, 59],
    reviews: [
      {
        date: '4/17/23',
        numResidents: 4,
        numBathrooms: 2,
        description: 'Shit ton of drain flies',
        rating: 1
      },
      {
        date: '4/17/23',
        numResidents: 4,
        numBathrooms: 2,
        description: 'Shit ton of drain flies',
        rating: 4
      }
    ]
  }; 

  return data;
}


export default function DisplayPage() {
  let data = databaseReceive();

  return (
    <div>
      <DormName dormName={data.name}/>
      <AggregatedReviews rating={data.rating} numReviews={data.numReviews} numEach={data.numEach}/>
      <Table reviews={data.reviews}/>
    </div>
  );
}

