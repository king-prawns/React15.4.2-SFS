import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect  } from 'react-router'
import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18n';
import './index.css';

import Users from './users/Users';
import User from './users/user/User';
import Todos from './users/user/todos/Todos';
import Posts from './posts/Posts';
import PageNotFound from'./page-not-found/PageNotFound';

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/users" />
          <Route path="/users" component={Users}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/user/:id" component={User}/>
          <Route path="/user/:id/todos" component={Todos}/>
          <Route path='*' component={PageNotFound} />
        </Route>
      </Router>
  </I18nextProvider>,
  document.getElementById('root')
);
