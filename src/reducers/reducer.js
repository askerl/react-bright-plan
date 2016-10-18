
// import actions
import { CHANGE_CURRENT_CHART } from '../constants/actions';
import {chartsData} from '../constants/data';

let initialState = {
  currentChart: 1,
  chartsData
}

const chartsReducer = (state = initialState, action) => {
  console.log(chartsData);
  console.log(state.chartsData[0] === chartsData[0]);

  switch (action.type) {
    case CHANGE_CURRENT_CHART:
      let {currentChart} = action;
      return Object.assign({}, state, { currentChart });
    default:
      return state;
  }
}

export default chartsReducer;
