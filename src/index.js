import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import configureStore from './store';
import App from './components/App';
import Home from './components/Home';
import Contacts from './components/contact';
import ContactDetails from './components/contact/ContactDetails';
import ContactForm from './components/contact/ContactForm';
import ContactList from './components/contact/ContactList';

import './main.scss'
import 'antd/dist/antd.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="contacts" component={Contacts}>
            <IndexRoute component={ContactList}/>
            <Route path="add" component={ContactForm}/>
            <Route path="edit/:contactId" component={ContactForm}/>
            <Route path="show/:contactId" component={ContactDetails}/>
          </Route>
        </Route>
      </Router>
    </LocaleProvider>
  </Provider>
  , document.getElementById('app'));
