import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const RouterWrap = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default RouterWrap;
