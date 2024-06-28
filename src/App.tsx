// import { useEffect, useState } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import TapClick from './components/TapClick'
import Boosts from "./pages/Boosts";
import Earns from "./pages/Earns";

import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TapClick />} />
          <Route path="boost" element={<Boosts />} />
          <Route path="eran" element={<Earns />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
