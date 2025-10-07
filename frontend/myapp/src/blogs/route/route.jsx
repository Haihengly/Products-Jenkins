import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import View from '../page/view';
import WelcomePage from '../page/welcome';
import Login from '../page/login';


export default function Routee() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/store" element={<View />} />
        <Route path="/" element={<Login />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}
