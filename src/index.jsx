import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import RouterWrap from './RouterWrap';

const Root = () => (
  <React.StrictMode>
    <Provider store={store}>
      <RouterWrap />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
