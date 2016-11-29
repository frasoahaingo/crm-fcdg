import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import store, { browserHistory } from './store';

import Router from './components/Router';
import App from './components/App';

import './main.scss'
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </LocaleProvider>
  </Provider>
  , document.getElementById('app')
);
