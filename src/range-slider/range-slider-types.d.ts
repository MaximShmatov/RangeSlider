type TRangeSliderState = {
  minValue: number,
  maxValue: number,
  valueFrom: number,
  valueTo: number,
  stepSize: number,
  isRange: boolean,
  isTooltip: boolean,
  isScale: boolean,
  isVertical: boolean,
};

type TRangeSliderId = {rangeSliderId: number}

type TRangeSliderStateKeys = keyof TRangeSliderState;

type TRangeSliderAction = {
  type: TRangeSliderStateKeys,
  value: number | boolean,
}

type TRangeSliderSetStore = { [P in TRangeSliderStateKeys]: (prop: number | boolean) => void };
type TRangeSliderStore = {getStore: TRangeSliderState, setStore: TRangeSliderSetStore}