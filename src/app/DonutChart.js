import React from 'react';
import ReactDOM from 'react-dom';

import {chartsData,categories,colors} from '../constants/data';

class DonutChart extends React.Component {

  componentDidMount() {

    let ctx = document.getElementById("myChart");

    let data = {
        labels: categories,
        datasets: [
            {
                data: chartsData[this.props.currentChart],
                backgroundColor: colors,
                hoverBackgroundColor: colors
            }]
    };

    // And for a doughnut chart
    this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: data
    });

  }

  componentWillReceiveProps(props) {
    this.chart.data.datasets[0].data = chartsData[props.currentChart]; // Would update the first dataset's value of 'March' to be 50
    this.chart.update();
  }

  render(){
    return(
      <canvas id="myChart"></canvas>
    );
  }

}

export default DonutChart;
