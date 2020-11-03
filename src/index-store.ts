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

const useRangeSliderStore = (id: number) => {
  const getStore = useSelector((store: TRootState) => store.rangeSlider[id]);
  const dispatch = useDispatch();

  function mapDispatchToProps(prop: TRangeSliderStateKeys) {
    return (value: number | boolean) => dispatch({type: 'rangeSlider', id, value: {type: prop, value}});
  }

  const setStore = {
    minValue: mapDispatchToProps('minValue'),
    maxValue: mapDispatchToProps('maxValue'),
    valueFrom: mapDispatchToProps('valueFrom'),
    valueTo: mapDispatchToProps('valueTo'),
    stepSize: mapDispatchToProps('stepSize'),
    isRange: mapDispatchToProps('isRange'),
    isTooltip: mapDispatchToProps('isTooltip'),
    isScale: mapDispatchToProps('isScale'),
    isVertical: mapDispatchToProps('isVertical'),
  }
  return {getStore, setStore};
}

const useRangeSliderStoreProp = (prop: TRangeSliderStateKeys, id: number) => {
  const dispatch = useDispatch();
  return {
    [prop]: useSelector((store: TRootState) => store.rangeSlider[id][prop]),
    [`${prop}Set`]: (value: number | boolean) => dispatch({type: 'rangeSlider', id, value: {type: prop, value}}),
  }
}

const store = createStore(rootReducer, rootState);

export {store as default, useRangeSliderStore, useRangeSliderStoreProp};