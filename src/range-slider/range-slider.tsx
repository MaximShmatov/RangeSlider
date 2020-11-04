import React, {createContext, useContext, useRef, useState} from 'react';
import {mapRangeSliderSelector, useMapRangeSliderDispatch} from '../index-store';
import stylesHor from './range-slider-hor.module.sass';
import stylesVer from './range-slider-ver.module.sass';

const Context = createContext(stylesHor);

const RangeSliderThumb = ({thumbFor}: { thumbFor: 'valueFrom' | 'valueTo' }) => {
  console.count(`thumb-${thumbFor}`);
  const [styles, rangeSliderId] = useContext(Context);
  const [minValue, maxValue, value] =
    mapRangeSliderSelector<number>(rangeSliderId, ['minValue', 'maxValue', thumbFor]);
  const [isVertical, isTooltip] = mapRangeSliderSelector<boolean>(rangeSliderId, ['isVertical', 'isTooltip']);
  const [setValue] = useMapRangeSliderDispatch(rangeSliderId, [thumbFor]);

  const posToPercent = (maxValue - minValue) / 100;
  const position = (value - minValue) / posToPercent;
  const posThumb = {
    left: isVertical ? '0' : `${position}%`,
    top: isVertical ? `${position}%` : '0',
  }

  const thumbRef = useRef<HTMLDivElement>(null);
  const handleDocumentMouseup = () => {
    document.removeEventListener('mousemove', handleDocumentMousemove);
    document.removeEventListener('mouseup', handleDocumentMouseup);
  }

  const handleDocumentMousemove = (evt: MouseEvent) => {
    const parent = thumbRef.current ? thumbRef.current.parentElement : null;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      const clientXorY = isVertical ? evt.clientY : evt.clientX;
      const offsetXorY = isVertical ? rect.top : rect.left;
      const widthOrHeight = isVertical ? rect.height : rect.width;
      const percentToPos = (clientXorY - offsetXorY) / (widthOrHeight / 100);
      const thumbValue = percentToPos * posToPercent + minValue;
      setValue(thumbValue);
    }
  }

  const handleThumbMousedown = (evt: React.MouseEvent) => {
    evt.preventDefault();
    document.addEventListener('mousemove', handleDocumentMousemove);
    document.addEventListener('mouseup', handleDocumentMouseup);
  }

  return (
    <div
      onMouseDown={handleThumbMousedown}
      style={posThumb}
      ref={thumbRef}
      className={styles.thumb}>
      {isTooltip ? <div className={styles.thumb__tooltip}>{value}</div> : null}
    </div>
  );
}

const RangeSliderRail = () => {
  console.count('rail');
  const [styles, rangeSliderId] = useContext(Context);
  const [minValue, maxValue, valueFrom, valueTo] =
    mapRangeSliderSelector<number>(rangeSliderId, ['minValue', 'maxValue', 'valueFrom', 'valueTo']);
  const [isVertical, isRange] = mapRangeSliderSelector<boolean>(rangeSliderId, ['isVertical', 'isRange']);

  const posToPercent = (maxValue - minValue) / 100;
  const positionFrom = (valueFrom - minValue) / posToPercent;
  const positionTo = (valueTo - minValue) / posToPercent;

  const posProgress = {
    left: isVertical ? '0' : `${positionFrom}%`,
    right: isVertical || !isRange ? '0' : `${100 - positionTo}%`,
    top: isVertical ? `${positionFrom}%` : '0',
    bottom: isVertical && isRange ? `${100 - positionTo}%` : '0',
  }

  return (
    <div className={styles.rail}>
      <RangeSliderThumb thumbFor="valueFrom"/>
      {isRange ? <RangeSliderThumb thumbFor="valueTo"/> : null}
      <div
        className={styles.progress}
        style={posProgress}>
      </div>
    </div>
  );
}

const RangeSliderScale = () => {
  console.count('scale')
  const [styles, rangeSliderId] = useContext(Context);
  const [minValue, maxValue] = mapRangeSliderSelector<number>(rangeSliderId, ['minValue', 'maxValue']);
  const [isVertical, isRange] = mapRangeSliderSelector<boolean>(rangeSliderId, ['isVertical', 'isRange']);
  const [setValueFrom, setValueTo] = useMapRangeSliderDispatch(rangeSliderId, ['valueFrom', 'valueTo']);


  const subdivision = <span className={styles.scale__subdivision}/>;
  const division = <div className={styles.scale__division}>
    {subdivision}
    {subdivision}
    {subdivision}
    {subdivision}
    {subdivision}
  </div>

  const [toggle, setToggle] = useState(true);
  const posToPercent = (maxValue - minValue) / 100;
  const handleScaleMousedown = (evt: React.MouseEvent) => {
    const rect = evt.currentTarget.getBoundingClientRect();
    let position: number;
    if (isVertical) {
      position = (evt.clientY - rect.top) / (rect.height / 100);
    } else {
      position = (evt.clientX - rect.left) / (rect.width / 100);
    }
    const value = position * posToPercent + minValue;
    if (isRange) {
      toggle ? setValueFrom(value) : setValueTo(value);
      setToggle(!toggle);
    } else {
      setValueFrom(value);
      setToggle(true);
    }
  }

  return (
    <div
      className={styles.scale}
      onMouseDown={handleScaleMousedown}>
      <div className={styles.scale__wrapper}>
        {division}
        {division}
        {division}
      </div>
      <div className={styles.scale__values}>
        <span className={styles.scale__valuesItem}>
          {minValue}
        </span>
        <span className={styles.scale__valuesItem}>
          {(minValue + ((maxValue - minValue) / 3)).toFixed()}
        </span>
        <span className={styles.scale__valuesItem}>
          {(minValue + ((maxValue - minValue) / 3) * 2).toFixed()}
        </span>
        <span className={styles.scale__valuesItem}>
          {maxValue}
        </span>
      </div>
    </div>
  );
};

const RangeSlider = ({rangeSliderId}: TRangeSliderId) => {
  console.count('range-slider');
  const [isVertical, isScale] = mapRangeSliderSelector<boolean>(rangeSliderId, ['isVertical', 'isScale']);

  const styles = isVertical ? stylesVer : stylesHor;

  return (
    <Context.Provider value={[styles, rangeSliderId]}>
      <div className={styles.slider}>
        <RangeSliderRail/>
        {isScale ? <RangeSliderScale/> : null}
      </div>
    </Context.Provider>
  );
};

export default RangeSlider;
