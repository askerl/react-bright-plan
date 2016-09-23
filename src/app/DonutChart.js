import React from 'react';
import ReactDOM from 'react-dom';

import {chartsData,categories} from '../constants/data';

class DonutChart extends React.Component {

  constructor(){
    super();
    this.initialChart = [
      {name: categories[0], y: 100},
      {name: categories[1], y: 200},
      {name: categories[2], y: 300},
      {name: categories[3], y: 400},
      {name: categories[4], y: 500},
      {name: categories[5], y: 700},
    ];
  }

  componentDidMount() {

    // Create the chart
    this.chart = $('#chart').highcharts({
          chart: {
              type: 'pie'
          },
          title: {
              text: 'Portfolio chart'
          },
          subtitle: {
              text: ''
          },
          plotOptions: {
              pie: {
                  shadow: false,
                  center: ['50%', '50%']
              }
          },
          tooltip: {
              valueSuffix: ''
          },
          series: [{
              name: 'Value',
              data: this.initialChart,
              size: '80%',
              innerSize: '60%',
              dataLabels: {
                  formatter: function () {
                      // display only if larger than 1
                      return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y : null;
                  }
              }
          }]
      });

  }

  componentWillReceiveProps(props) {
    this.chart.highcharts().series[0].setData(chartsData[props.currentChart]);
  }

  render(){
    return(
      <div id="chart">
      </div>
    );
  }

}

export default DonutChart;
