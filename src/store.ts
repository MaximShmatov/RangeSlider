import { configureStore,  } from '@reduxjs/toolkit';
import sliderReducer from './components/Slider/rangeSliderSlice';

const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

declare module 'react-redux' {
  interface DefaultRootState extends ReturnType<typeof store.getState> {}
}

export default store;