import Review from "./components/review";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import AggregatedReviews from './components/AggregatedReviews';
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
