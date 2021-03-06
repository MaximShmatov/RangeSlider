import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMinValue,
  setMaxValue,
  setValueFrom,
  setValueTo,
  setStepSize,
  setHasTooltip,
  setHasScale,
  setIsVertical,
  setIsRange,
} from '../Slider/rangeSliderSlice';
import './ControlPanel.sass';

const ControlPanel = () => {
  const dispatch = useDispatch();
  const {
    minValue, maxValue, valueFrom, valueTo, stepSize, isRange, hasTooltip, hasScale, isVertical,
  } = useSelector(({ slider }) => slider);

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
              dispatch(setMinValue(minValueState));
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
              dispatch(setMaxValue(maxValueState));
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
              dispatch(setValueFrom(valueFromState));
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
              dispatch(setValueTo(valueToState));
              setValueToState(valueTo);
            }}
            disabled={!isRange}
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
              dispatch(setStepSize(stepSizeState));
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
            onChange={evt => dispatch(setIsVertical(Boolean(evt.target.checked)))}
          />
          Is vertical
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-range"
            type="checkbox"
            checked={isRange}
            onChange={evt => dispatch(setIsRange(Boolean(evt.target.checked)))}
          />
          Is range
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-tooltip"
            type="checkbox"
            checked={hasTooltip}
            onChange={evt => dispatch(setHasTooltip(Boolean(evt.target.checked)))}
          />
          Has tooltip
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-scale"
            type="checkbox"
            checked={hasScale}
            onChange={evt => dispatch(setHasScale(Boolean(evt.target.checked)))}
          />
          Has scale
        </label>
        <label className="control__panel-item">
          <span className="control__range">
            {isRange ? valueToState - valueFromState : valueFromState}
          </span>
          Value
        </label>
      </fieldset>
    </form>
  );
}

export default ControlPanel;
