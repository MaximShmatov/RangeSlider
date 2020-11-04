import {createStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import rangeSliderReducer, {defaultState} from './range-slider/range-slider-reducer';

const rootState = {
  rangeSlider: [
    {
      minValue: -80,
      maxValue: 245,
      valueFrom: 10,
      valueTo: 90,
      stepSize: 5,
      isRange: true,
      isTooltip: true,
      isScale: true,
      isVertical: false,
    },
    {...defaultState, valueFrom: 10, valueTo: 90, isVertical: true, maxValue: 100},
    {...defaultState, isTooltip: true, isScale: true, isRange: true, maxValue: 10},
    {...defaultState}
  ],
}

const rootReducer = (appState: TRootState = rootState, action: TRootAction) => {
  const state = {...appState}
  switch (action.type) {
    case 'rangeSlider':
      state.rangeSlider[action.id] = rangeSliderReducer(state.rangeSlider[action.id], action.value);
      return state;
    default:
      return appState;
  }
}

const store = createStore(rootReducer, rootState);

function mapRangeSliderSelector<T extends number | boolean>(id: number, props: TRangeSliderStateKeys[]) {
  return props.map((item: TRangeSliderStateKeys) => {
    return useSelector((store: TRootState) => store.rangeSlider[id][item]) as T;
  });
}

const useMapRangeSliderDispatch = (id: number, props: TRangeSliderStateKeys[]) => {
  const dispatch = useDispatch();
  return props.map((item: TRangeSliderStateKeys) => {
    return (value: number | boolean) => dispatch({type: 'rangeSlider', id, value: {type: item, value}});
  });
}

export {store as default, mapRangeSliderSelector, useMapRangeSliderDispatch};
