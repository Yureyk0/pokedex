import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import AppRouter from './routes';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
