import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import the Provider - global store
import { Provider } from 'react-redux'

import App from './App';
import store from './store';

ReactDOM.render(
  // Wrap the entire app with global store: 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
