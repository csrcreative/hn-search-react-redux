
https://tighten.co/blog/react-101-using-redux

state

terms
search button click

terms.js
___________________________
export default function() {
  return [
    {
      id: 1,
      term: 'react'
    },
    {
      id: 2,
      url: 'mongodb'
    },
    {
      id: 3,
      url: 'go'
    }
  ];
}

reducers/index.js
___________________________
import { combineReducers } from 'redux';
import TermsReducer from './terms';

const rootReducer = combineReducers({
  terms: TermsReducer
});

export default rootReducer;

configureStore.js
___________________________
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  return store;
}


index.js
___________________________
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);