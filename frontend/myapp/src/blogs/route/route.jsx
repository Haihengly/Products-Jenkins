import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import View from '../page/view';


export default function Routee() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<View />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}
