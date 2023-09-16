import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2f3d300c8b20dd64c1d363bb91a7daa0';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);