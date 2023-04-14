import Review from "./components/review";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

function App() {
  return (
    <div>
      <List>
        <ListItem>
          <Review />
        </ListItem>
        <Divider />
        <ListItem>
          <Review />
        </ListItem>
        <Divider />
        <ListItem>
          <Review />
        </ListItem>
      </List>
    </div>
  );
}

export default App;
