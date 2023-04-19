import * as React from 'react';
import AggregatedReviews from '../components/AggregatedReviews';
import DormName from '../components/DormName';
import Table from '../components/Table';

requester = new DataRequester();

// Might need to refactor to take into account await methods
function databaseReceive(name){
  jsonDorm = await requester.getData(DataType.Dorm, name);
  let data = {
    name: jsonDorm.name,
    rating: jsonDorm.rating,
    numReviews: jsonDorm.numReviews,
    numEach: jsonDorm.numEach,
    reviews: jsonDorm.reviews,
  }; 

  return data;
}


export default function DisplayPage(props) {
  let data = databaseReceive(props.name);

  return (
    <div>
      <DormName dormName={props.name}/>
      <AggregatedReviews rating={data.rating} numReviews={data.numReviews} numEach={data.numEach}/>
      <Table reviews={data.reviews}/>
    </div>
  );
}

