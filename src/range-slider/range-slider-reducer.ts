const defaultState = {
  minValue: 0,
  maxValue: 1,
  valueFrom: 0,
  valueTo: 1,
  stepSize: 1,
  isRange: false,
  isTooltip: false,
  isScale: false,
  isVertical: false,
}

const rangeSliderReducer = (currentState: TRangeSliderState = defaultState, action: TRangeSliderAction) => {
  const state = {...currentState};
  switch (action.type) {
    case 'isRange':
      state.isRange = action.value as boolean;
      if (action.value && state.valueTo < state.valueFrom) {
        state.valueTo = state.valueFrom;
      }
      return state;
    case 'isTooltip':
      state.isTooltip = action.value as boolean;
      return state;
    case 'isScale':
      state.isScale = action.value as boolean;
      return state;
    case 'isVertical':
      state.isVertical = action.value as boolean;
      return state;
    case 'minValue':
      const minValue = action.value as number;
      if (minValue < state.valueFrom) {
        const step = Math.round((state.valueFrom - minValue) / state.stepSize) * state.stepSize;
        state.minValue = state.valueFrom - step;
      } else {
        state.minValue = state.valueFrom;
      }
      if (state.minValue === state.maxValue) {
        state.minValue -= state.stepSize;
      }
      return state;
    case 'stepSize':
      let stepSize = action.value as number;
      const maxStep = Math.abs(state.maxValue - state.minValue);
      stepSize = Math.abs(Math.round(stepSize));
      if (maxStep % stepSize !== 0) {
        while (maxStep % stepSize !== 0) {
          stepSize -= 1;
          if (stepSize <= 0) {
            state.stepSize = 1;
            return state;
          }
        }
      }

      if (stepSize < maxStep && stepSize > 0) {
        state.stepSize = Math.round(stepSize);
      } else if (stepSize >= maxStep) {
        state.stepSize = maxStep;
      } else {
        state.stepSize = 1;
      }

      if (state.valueFrom > state.minValue) {
        state.valueFrom = Math.round((state.valueFrom - state.minValue) / state.stepSize);
        state.valueFrom = state.valueFrom * state.stepSize + state.minValue;
      } else {
        state.valueFrom = state.minValue;
      }

      if (state.isRange) {
        if (state.valueTo > state.valueFrom) {
          state.valueTo = Math.round((state.valueTo - state.minValue) / state.stepSize);
          state.valueTo = state.valueTo * state.stepSize + state.minValue;
        } else {
          state.valueTo = state.valueFrom;
        }
      }
      return state;
    case 'maxValue':
      const maxValue = action.value as number;
      if (state.isRange && maxValue <= state.valueTo) {
        state.maxValue = state.valueTo;
      } else if (maxValue <= state.valueFrom) {
        state.maxValue = state.valueFrom;
      } else {
        state.maxValue = Math.round((maxValue - state.minValue) / state.stepSize);
        state.maxValue = state.maxValue * state.stepSize + state.minValue;
      }
      if (state.maxValue === state.minValue) {
        state.maxValue += state.stepSize;
      }
      return state;
    case 'valueFrom':
      const valueFrom = action.value as number;
      if (valueFrom <= state.minValue) {
        state.valueFrom = state.minValue;
      } else if (state.isRange && valueFrom >= state.valueTo) {
        state.valueFrom = state.valueTo;
      } else if (valueFrom >= state.maxValue) {
        state.valueFrom = state.maxValue;
      } else {
        state.valueFrom = Math.round((valueFrom - state.minValue) / state.stepSize);
        state.valueFrom = state.valueFrom * state.stepSize + state.minValue;
      }
      return state;
    case 'valueTo':
      const valueTo = action.value as number;
      if (state.isRange) {
        if (valueTo > state.valueFrom && valueTo < state.maxValue) {
          state.valueTo = Math.round((valueTo - state.valueFrom) / state.stepSize);
          state.valueTo = state.valueTo * state.stepSize + state.valueFrom;
        } else if (valueTo >= state.maxValue) {
          state.valueTo = state.maxValue;
        } else {
          state.valueTo = state.valueFrom;
        }
      }
      return state;
    default:
      return currentState;
  }
};

export {rangeSliderReducer as default, defaultState};
