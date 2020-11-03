// <reference types="react-scripts" />
declare module '*.module.sass';

type TRootState = {
  rangeSlider: TRangeSliderState[],
}

type TRootStateKeys = keyof TRootState;

type TRootAction = {
  type: TRootStateKeys,
  id: number,
  value: TRangeSliderAction,
}