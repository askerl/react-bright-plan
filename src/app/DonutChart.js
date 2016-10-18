import React from 'react';
import ReactDOM from 'react-dom';

import {chartsData,categories} from '../constants/data';

class DonutChart extends React.Component {

  componentDidMount() {
    console.log(chartsData);
    // Create the chart
    this.chart = $('#chart').highcharts({
          chart: {
              type: 'pie'
          },
          title: {
              text: `Portfolio chart`
          },
          subtitle: {
              text: ''
          },
          plotOptions: {
              pie: {
                  shadow: false,
                  center: ['50%', '50%'],
                  dataLabels: {
                    enabled: true,
                    distance: -20,
                    style: {
                        fontSize: '10px',
                        fontWeight: 'bold',
                        color: 'black'
                    }
                  }
              }
          },
          tooltip: {
              valueSuffix: 'USD'
          },
          series: [{
              name: 'Value',
              data: chartsData[this.props.currentChart],
              size: '100%',
              innerSize: '50%',
              dataLabels: {
                  formatter: function () {
                      // display only if larger than 1
                      return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + ' USD' : null;
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
