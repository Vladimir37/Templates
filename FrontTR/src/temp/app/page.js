var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as React from 'react';
import { Header } from './header';
import { Footer } from './footer';
;
;
export var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
    }
    Page.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(Header, null), 
            React.createElement("main", null), 
            React.createElement(Footer, null)));
    };
    return Page;
}(React.Component));
