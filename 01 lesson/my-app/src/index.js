import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render() - send the data to the broswer (DOM).  
ReactDOM.render(
  <React.StrictMode>
    {/* Send the main component to the root block
    in index.html */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
