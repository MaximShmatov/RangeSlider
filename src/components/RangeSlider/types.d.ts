type TRangeSliderStateKeysNumber = 'minValue' | 'maxValue' | 'valueFrom' | 'valueTo' | 'stepSize';
type TRangeSliderStateKeysBoolean = 'isRange' | 'isTooltip' | 'isScale' | 'isVertical';
type TRangeSliderStateKeys = TRangeSliderStateKeysNumber | TRangeSliderStateKeysBoolean;

type TRangeSliderState = {
  [P in TRangeSliderStateKeys]: P extends TRangeSliderStateKeysNumber ? number : P extends TRangeSliderStateKeysBoolean ? boolean : null;
};

type TRangeSliderId = { rangeSliderId: number }

type TRangeSliderAction = {
  type: TRangeSliderStateKeys,
  value: number | boolean,
}
