import React from 'react';
import ReactDOM from 'react-dom';
import MyProvider from './Context/MyProvider';
import App from './App';

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root'),
);
