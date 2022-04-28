import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header  from './Header';
import Home from './HomePage';
import Footer from './Footer';
import Login from './Login';
import Rooms from './Rooms';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header /><Home /><Footer /></>} />
      <Route path="/rooms" element={<><Header /><Rooms /></>} />
      <Route path="/login" element={<><Header /><Login /><Footer /></>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
