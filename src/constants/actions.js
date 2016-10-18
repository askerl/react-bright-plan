/*
 * action types
 */

export const CHANGE_CURRENT_CHART = 'CHANGE_CURRENT_CHART';

/*
 * action creators
 */

export function changeChart(newCurrentChart) {
  return {
    type: CHANGE_CURRENT_CHART,
    currentChart: newCurrentChart
  }
}
