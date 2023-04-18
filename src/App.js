import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayPage from "./pages/DisplayPage";
import FilterPage from "./pages/FilterPage";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AggregatedReviews from './components/AggregatedReviews';
import DormName from './components/DormName';
import Table from './components/Table';

export function App() {
    const [selected, setSelected] = React.useState('Raymond');
  return (
    <BrowserRouter>
      <Button onClick={signOut}>Sign out</Button>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FilterPage setSelected={setSelected}/>} />
          <Route path="DisplayPage" element={<DisplayPage name={selected}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
