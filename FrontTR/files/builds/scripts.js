'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _reactRouter = require('react-router');

var _page = require('./app/page');

require('./index.less');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

ReactDOM.render(React.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory }, React.createElement(_reactRouter.Route, { path: '/', component: _page.Page })), document.getElementById('root'));