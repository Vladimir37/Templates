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
export var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    Main.prototype.generatePage = function () {
        return React.createElement("main", null);
    };
    Main.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(Header, null), 
            this.generatePage(), 
            React.createElement(Footer, null)));
    };
    return Main;
}(React.Component));
