import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Page } from './app/page';
import './index.less';
ReactDOM.render(React.createElement(Router, {history: browserHistory}, 
    React.createElement(Route, {path: '/', component: Page})
), document.getElementById('root'));
