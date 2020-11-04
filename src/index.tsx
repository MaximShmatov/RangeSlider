import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './index-store';
import ControlPanel from './control-panel/control-panel';
import './index.sass';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ControlPanel rangeSliderId={0}/>
      <ControlPanel rangeSliderId={1}/>
      <ControlPanel rangeSliderId={2}/>
      <ControlPanel rangeSliderId={3}/>
    </Provider>
  </React.StrictMode>,
  document.querySelector('.app-main')
);