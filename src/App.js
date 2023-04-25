import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayPage from "./pages/DisplayPage";
import FilterPage from "./pages/FilterPage";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


export function App({user, signOut}) {
  const [selected, setSelected] = React.useState('Taplin');
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout sOut={signOut}/>}>
          <Route index element={<FilterPage setSelected={setSelected} />} />
          <Route path="DisplayPage" element={<DisplayPage name={selected} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
