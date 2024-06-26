import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./App.css";

import Header from './includes/components/header';

import Home from './includes/pages/Home';
import PasteTOS from './includes/pages/PasteTOS';
import Request from './includes/pages/Request';
import NoPage from './includes/pages/NoPage';

import TermsPage from "./includes/pages/terms/termsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/paste-tos" element={<PasteTOS />} />
          <Route path="/request" element={<Request />} />
          <Route path="/:pageName" element={<TermsPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
