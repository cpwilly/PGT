import * as React from 'react';
import AggregatedReviews from './components/AggregatedReviews';
import Review from './components/Review';
import DormName from './components/DormName';
import Table from './components/Table';

function App() {
  return (
    <div>
      <DormName />
      <AggregatedReviews />
      <Table />
    </div>
  );
}

export default App;
