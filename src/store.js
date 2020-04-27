import ReduxThunk from 'redux-thunk';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export {
  store,
};
