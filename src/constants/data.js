

export const categories = ['Stocks', 'Bonds', 'ETFs', 'Cash', 'Commodities','Fixed Income'];
export const colors = ['#506C91','#6E9F69','#4E92DF','#FF9135','#FFF092','#D14747'];

const allCharts = generateCharts(50, 1000);

export const chartsData = [...allCharts];

// Generate 9 random charts
function generateCharts(min, max){

  let charts = [];
  for (let c=0; c<10; c++){
    let chart =[]
    for (let i=0, l=categories.length; i<l; i++ ){
      chart.push(getRandomIntInclusive(min, max));
    }
    charts.push(chart);
  }
  return charts;

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
