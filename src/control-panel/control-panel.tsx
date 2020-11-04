import React, {useState, useEffect, useMemo} from 'react';
import {useMapRangeSliderDispatch, mapRangeSliderSelector} from '../index-store';
import RangeSlider from '../range-slider/range-slider';
import './control-panel.sass';

const ControlPanel = ({rangeSliderId}: TRangeSliderId) => {
  const [minValue, maxValue, valueFrom, valueTo, stepSize] =
    mapRangeSliderSelector<number>(rangeSliderId, ['minValue','maxValue', 'valueFrom', 'valueTo', 'stepSize']);
  const [isRange, isTooltip, isScale, isVertical] =
    mapRangeSliderSelector<boolean>(rangeSliderId, ['isRange', 'isTooltip', 'isScale', 'isVertical']);
  const [setMinValue, setMaxValue, setValueFrom, setValueTo, setStepSize, setIsRange, setIsTooltip, setIsScale, setIsVertical] =
    useMapRangeSliderDispatch(
      rangeSliderId,
      ['minValue', 'maxValue', 'valueFrom', 'valueTo', 'stepSize', 'isRange', 'isTooltip', 'isScale', 'isVertical']
    );

  const [minValueState, setMinValueState] = useState(minValue);
  const [maxValueState, setMaxValueState] = useState(maxValue);
  const [valueFromState, setValueFromState] = useState(valueFrom);
  const [valueToState, setValueToState] = useState(valueTo);
  const [stepSizeState, setStepSizeState] = useState(stepSize);

  useEffect(() => {
    setMinValueState(minValue);
    setMaxValueState(maxValue);
    setValueFromState(valueFrom);
    setValueToState(valueTo);
    setStepSizeState(stepSize);
  }, [minValue, maxValue, valueFrom, valueTo, stepSize]);

  return (
    <form className="control">
      <div className="control__slider">
        {useMemo(() => <RangeSlider rangeSliderId={rangeSliderId}/>, [rangeSliderId])}
      </div>
      <fieldset className="control__panel">
        <legend>
          Control Panel
        </legend>
        <label className="control__panel-item">
          <input
            className="control__min-value"
            type="number"
            value={minValueState}
            onChange={evt => {
              setMinValueState(Number(evt.target.value));
            }}
            onBlur={() => {
              setMinValue(minValueState);
              setMinValueState(minValue);
            }}
          />
          Min value
        </label>
        <label className="control__panel-item">
          <input
            className="control__max-value"
            type="number"
            value={maxValueState}
            onChange={evt => setMaxValueState(Number(evt.target.value))}
            onBlur={() => {
              setMaxValue(maxValueState);
              setMaxValueState(maxValue);
            }}
          />
          Max value
        </label>
        <label className="control__panel-item">
          <input
            className="control__value-from"
            type="number"
            value={valueFromState}
            onChange={evt => setValueFromState(Number(evt.target.value))}
            onBlur={() => {
              setValueFrom(valueFromState);
              setValueFromState(valueFrom);
            }}
          />
          Value from
        </label>
        <label className="control__panel-item">
          <input
            className="control__value-to"
            type="number"
            value={valueToState}
            onChange={evt => setValueToState(Number(evt.target.value))}
            onBlur={() => {
              setValueTo(valueToState);
              setValueToState(valueTo);
            }}
          />
          Value to
        </label>
        <label className="control__panel-item">
          <input
            className="control__step-size"
            type="number"
            value={stepSizeState}
            onChange={evt => setStepSizeState(Number(evt.target.value))}
            onBlur={() => {
              setStepSize(stepSizeState);
              setStepSizeState(stepSize);
            }}
          />
          Step size
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-vertical"
            type="checkbox"
            checked={isVertical}
            onChange={evt => setIsVertical(Boolean(evt.target.checked))}
          />
          Is vertical
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-range"
            type="checkbox"
            checked={isRange}
            onChange={evt => setIsRange(Boolean(evt.target.checked))}
          />
          Is range
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-tooltip"
            type="checkbox"
            checked={isTooltip}
            onChange={evt => setIsTooltip(Boolean(evt.target.checked))}
          />
          Is tooltip
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-scale"
            type="checkbox"
            checked={isScale}
            onChange={evt => setIsScale(Boolean(evt.target.checked))}
          />
          Is scale
        </label>
        <label className="control__panel-item">
          <span className="control__range">
            {isRange ? valueToState - valueFromState : valueFromState}
          </span>
          Range
        </label>
      </fieldset>
    </form>
  );
}

export default ControlPanel;
