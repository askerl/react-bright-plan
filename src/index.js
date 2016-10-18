import React from 'react';
import ReactDOM from 'react-dom';

// store
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import chartsReducer from './reducers/reducer.js';
import { connect } from 'react-redux';

import './index.css';

import Nav from './app/Nav';
import ChartsContainer from './containers/ChartsContainer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

let title = "Bright Plan LLC";

// store
const logger = createLogger();
const store = createStore(
  chartsReducer,
  applyMiddleware(thunk, promise, logger)
);

const App = () => (
  <div id="wrapper">
    <Nav title={title}/>
    <div id="page-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <h1 className="page-header">Portfolio Charts</h1>
          </div>
      </div>
      <ChartsContainer />
    </div>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
