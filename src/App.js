import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import DisplayPage from "./pages/DisplayPage";
import FilterPage from "./pages/FilterPage";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

export default function App() {
  const [selected, setSelected] = React.useState('Raymond');

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FilterPage setSelected={setSelected} />} />
        <Route path="DisplayPage" element={<DisplayPage name={selected} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}