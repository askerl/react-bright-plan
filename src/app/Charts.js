import React from 'react';
import ReactDOM from 'react-dom';

import DonutChart from './DonutChart';

class Charts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentChart: 1}
  }

  _handleOnChange(e){
    e.preventDefault();
    this.setState({
      currentChart: this._input.value
    });
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  {`Risk profile: ${this.state.currentChart}`}
                </h3>
              </div>
              <div className="panel-body">
                <input
                  ref={(c) => this._input = c}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  defaultValue="1"
                  onChange={this._handleOnChange.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  {`Investment portfolio #${this.state.currentChart}`}
                </h3>
              </div>
              <div className="panel-body">
                <DonutChart currentChart={this.state.currentChart - 1}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Charts;
