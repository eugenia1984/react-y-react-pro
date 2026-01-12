import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
import { TrafficLight } from './01-useState/TrafficLight';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    <TrafficLight />
  </React.StrictMode>,
)
