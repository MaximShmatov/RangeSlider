// <reference types="react-scripts" />
declare module '*.module.sass';

type TRootStateKeys = 'rangeSlider';

type TRootState = {
  [P in TRootStateKeys]: TRangeSliderState[];
}

type TRootAction = {
  type: TRootStateKeys,
  id: number,
  value: TRangeSliderAction,
}