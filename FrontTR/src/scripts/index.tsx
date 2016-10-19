/// <reference path="../../typing/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Page} from './app/page';

import './index.less';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Page}/>
  </Router>,
  document.getElementById('root')
);
