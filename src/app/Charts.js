import React from 'react';
import ReactDOM from 'react-dom';

import DonutChart from './DonutChart';
import Panel from './Panel';

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
            <Panel title={`Risk profile: ${this.state.currentChart}`}>
              <input
                id="risk"
                ref={(c) => this._input = c}
                type="range"
                min="1"
                max="10"
                step="1"
                defaultValue="1"
                onChange={this._handleOnChange.bind(this)}
              />
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Panel title={`Investment portfolio`}>
              <DonutChart currentChart={this.state.currentChart - 1}/>
            </Panel>
          </div>
        </div>
      </div>
    );
  }

}

export default Charts;
