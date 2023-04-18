import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AggregatedReviews from './components/AggregatedReviews';
import DormName from './components/DormName';
import Table from './components/Table';

function App({ signOut, user }) {
  return (
    <div>
      <Button onClick={signOut}>Sign out</Button>
      <DormName />
      <AggregatedReviews />
      <Table />
    </div>
  );
}

export default withAuthenticator(App);
