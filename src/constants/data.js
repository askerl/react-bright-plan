

export const categories = ['Stocks', 'Bonds', 'ETFs', 'Cash', 'Commodities','Fixed Income'];

const initialChart = [
  {name: categories[0], y: 100},
  {name: categories[1], y: 200},
  {name: categories[2], y: 300},
  {name: categories[3], y: 400},
  {name: categories[4], y: 500},
  {name: categories[5], y: 700},
];

let otherCharts = generateCharts(50, 1000);

export const chartsData = [initialChart,...otherCharts];

// Generate 9 random charts
function generateCharts(min, max){

  let charts = [];
  for (let c=0; c<9; c++){
    let chart =[]
    for (let i=0, l=categories.length; i<l; i++ ){
      chart.push({name: categories[i], y:getRandomIntInclusive(min, max)});
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
