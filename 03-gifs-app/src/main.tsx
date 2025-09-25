import React from 'react';
import ReactDOM from 'react-dom/client';

// import { GifsApp } from './GifsApp';
import { MyCounterApp } from './gifs/counter/components/MyCounterApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <GifsApp /> */}
    <MyCounterApp />
  </React.StrictMode>,
)
