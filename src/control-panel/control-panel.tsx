import React, {useState, useEffect, useMemo} from 'react';
import {useRangeSliderStore} from '../index-store';
import RangeSlider from '../range-slider/range-slider';
import './control-panel.sass';

const ControlPanel = ({rangeSliderId}: TRangeSliderId) => {
  console.count('control');
  const {getStore, setStore} = useRangeSliderStore(rangeSliderId);

  const [minValueState, setMinValueState] = useState(getStore.minValue);
  const [maxValueState, setMaxValueState] = useState(getStore.maxValue);
  const [valueFromState, setValueFromState] = useState(getStore.valueFrom);
  const [valueToState, setValueToState] = useState(getStore.valueTo);
  const [stepSizeState, setStepSizeState] = useState(getStore.stepSize);

  const range = () => {
    if (getStore.isRange) {
      return valueToState - valueFromState;
    }
    return valueFromState;
  }

  useEffect(() => {
    setMinValueState(getStore.minValue);
    setMaxValueState(getStore.maxValue);
    setValueFromState(getStore.valueFrom);
    setValueToState(getStore.valueTo);
    setStepSizeState(getStore.stepSize);
  }, [getStore.minValue, getStore.maxValue, getStore.valueFrom, getStore.valueTo, getStore.stepSize]);

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
              setStore.minValue(minValueState);
              setMinValueState(getStore.minValue);
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
              setStore.maxValue(maxValueState);
              setMaxValueState(getStore.maxValue);
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
              setStore.valueFrom(valueFromState);
              setValueFromState(getStore.valueFrom);
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
              setStore.valueTo(valueToState);
              setValueToState(getStore.valueTo);
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
              setStore.stepSize(stepSizeState);
              setStepSizeState(getStore.stepSize);
            }}
          />
          Step size
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-vertical"
            type="checkbox"
            checked={getStore.isVertical}
            onChange={evt => setStore.isVertical(Boolean(evt.target.checked))}
          />
          Is vertical
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-range"
            type="checkbox"
            checked={getStore.isRange}
            onChange={evt => setStore.isRange(Boolean(evt.target.checked))}
          />
          Is range
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-tooltip"
            type="checkbox"
            checked={getStore.isTooltip}
            onChange={evt => setStore.isTooltip(Boolean(evt.target.checked))}
          />
          Is tooltip
        </label>
        <label className="control__panel-item">
          <input
            className="control__is-scale"
            type="checkbox"
            checked={getStore.isScale}
            onChange={evt => setStore.isScale(Boolean(evt.target.checked))}
          />
          Is scale
        </label>
        <label className="control__panel-item">
          <span className="control__range">
            {range()}
          </span>
          Range
        </label>
      </fieldset>
    </form>
  );
}

export default ControlPanel;
