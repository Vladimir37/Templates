import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Main } from './app/pages/main';
import { NotFound } from './app/pages/404';
ReactDOM.render(React.createElement(Router, {history: browserHistory}, 
    React.createElement(Route, {path: '/', component: Main}), 
    React.createElement(Route, {path: '*', component: NotFound})), document.getElementById('root'));
