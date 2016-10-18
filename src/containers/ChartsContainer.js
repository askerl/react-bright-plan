import Charts from '../app/Charts.js';

import { connect } from 'react-redux';
import { changeChart } from '../constants/actions';


const mapStateToProps = (state) => {
  return {
    currentChart: state.currentChart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeChart: (newCurrentChart) => dispatch(changeChart(newCurrentChart))
  };
};

const ChartsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Charts);

export default ChartsContainer;
