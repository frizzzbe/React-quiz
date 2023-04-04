import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import App from './App';
import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Menu/>
    {/* <App testId={1}/> */}
  </React.StrictMode>,
);
