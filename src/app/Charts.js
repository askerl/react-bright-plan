import React from 'react';
import ReactDOM from 'react-dom';

import DonutChart from './DonutChart';

import {chartsList} from '../constants/constants';

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: 1}
  }

  // componentDidMount(){
  //   console.log("did mount");
  //   this._drawChart();
  // }
  //
  // _drawChart(){
  //   Morris.Donut({
  //       element: 'morris-donut-chart',
  //       data: chartsList[this.state.current - 1],
  //       resize: false
  //     });
  // }

  _handleOnChange(e){
    e.preventDefault();
    this.setState({
      current: this._input.value
    });
    // this._drawChart();
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Risk tolerance
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
                  {`Investment portfolio: #${this.state.current}`}
                </h3>
              </div>
              <div className="panel-body">
                <DonutChart chartNum={this.state.current - 1}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Charts;
