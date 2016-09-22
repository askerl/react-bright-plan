import React from 'react';
import ReactDOM from 'react-dom';

import {chartsList} from '../constants/constants';

class DonutChart extends React.Component {

  componentDidMount() {
    this.donut = Morris.Donut({
      element: 'morris-donut-chart',
      data: chartsList[this.props.chartNum || 0],
      resize: true
    });
  }

  componentWillReceiveProps(props) {
    this.donut.setData(chartsList[props.chartNum]);
    this.donut.redraw();
  }

  render(){
    console.log("render",this.props.chartNum);


    return(
      <div id="morris-donut-chart">
      </div>
    );
  }

}

export default DonutChart;
