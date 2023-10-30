import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import User from './User';
import Logout from './Logout';
import Logging from './Logging';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/user" element={<User />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/logging" element={<Logging />} />
      </Routes>
      </BrowserRouter>
      )
  }

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
