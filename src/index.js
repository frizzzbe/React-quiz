import React from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Menu/> */}
      <App/>
    </Provider>
  </React.StrictMode>,
);
