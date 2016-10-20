var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
;
;
export var NotFound = (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        _super.apply(this, arguments);
    }
    NotFound.prototype.generatePage = function () {
        return (React.createElement("main", null, 
            React.createElement("h1", null, "Error 404"), 
            React.createElement("h2", null, "Page not found")));
    };
    NotFound.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(Header, null), 
            this.generatePage(), 
            React.createElement(Footer, null)));
    };
    return NotFound;
}(React.Component));
