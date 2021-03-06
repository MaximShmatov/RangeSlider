import React from 'react';
import logo from './logo.svg';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Slider from './components/Slider/Slider';
import './App.sass';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img className="app-header__logo" src={logo} alt="logo" />
        <h3 className="app-header__title">Range Slider Demo</h3>
      </header>
      <main className="app-main">
        <div className="app-main__container">
          <div className="app-main__container-slider">
            <Slider />
          </div>
          <ControlPanel />
        </div>
      </main>
      <footer className="app-footer">
        <img className="app-footer__logo" src={logo} alt="logo" />
      </footer>
    </div>
  );
}

export default App;
