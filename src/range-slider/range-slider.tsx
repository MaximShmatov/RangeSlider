import React, {createContext, useContext, useMemo, useRef, useState} from 'react';
import {useRangeSliderStore, useRangeSliderStoreProp} from '../index-store';
import stylesHor from './range-slider-hor.module.sass';
import stylesVer from './range-slider-ver.module.sass';

const Context = createContext(stylesHor);

const RangeSliderThumb = ({thumbFor}: { thumbFor: 'valueFrom' | 'valueTo' }) => {
  const [styles, rangeSliderId] = useContext(Context);
  const {getStore, setStore} = useRangeSliderStore(rangeSliderId);
  const {minValue, maxValue, isVertical, isTooltip} = getStore;

  const posToPercent = (maxValue - minValue) / 100;
  const position = (getStore[thumbFor] - minValue) / posToPercent;
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
      setStore[thumbFor](thumbValue);
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
      {isTooltip ? <div className={styles.thumb__tooltip}>{getStore[thumbFor]}</div> : null}
    </div>
  );
}

const RangeSliderRail = () => {
  const [styles, rangeSliderId] = useContext(Context);
  const {getStore} = useRangeSliderStore(rangeSliderId);
  const {isVertical, isRange, minValue, maxValue, valueFrom, valueTo} = getStore;

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
  console.count('range-slider-scale')
  const [styles, rangeSliderId] = useContext(Context);
  const {getStore, setStore} = useRangeSliderStore(rangeSliderId);
  const {minValue, maxValue, isRange, isVertical} = getStore;

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
      toggle ? setStore.valueFrom(value) : setStore.valueTo(value);
      setToggle(!toggle);
    } else {
      setStore.valueFrom(value);
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
  const {isVertical} = useRangeSliderStoreProp('isVertical', rangeSliderId);
  const {isScale} = useRangeSliderStoreProp('isScale', rangeSliderId);
  const styles = isVertical ? stylesVer : stylesHor;
  const scale = useMemo(() => <RangeSliderScale/>, []);
  return (
    <Context.Provider value={[styles, rangeSliderId]}>
      <div className={styles.slider}>
        <RangeSliderRail/>
        {isScale ? scale : null}
      </div>
    </Context.Provider>
  );
};

export default RangeSlider;
