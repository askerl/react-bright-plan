import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Nav from './app/Nav';
import Charts from './app/Charts';

let title = "Bright Plan LLC";

const App = () => (
  <div id="wrapper">
    <Nav title={title}/>
    <div id="page-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <h1 className="page-header">Portfolio Charts</h1>
          </div>
      </div>
      <Charts />
    </div>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
