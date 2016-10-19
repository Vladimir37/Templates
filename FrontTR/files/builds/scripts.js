define(["require", "exports", 'react', 'react-dom', 'react-router', './app/page', './index.less'], function (require, exports, React, ReactDOM, react_router_1, page_1) {
    "use strict";
    ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, 
        React.createElement(react_router_1.Route, {path: '/', component: page_1.Page})
    ), document.getElementById('root'));
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    ;
    ;
    var Footer = (function (_super) {
        __extends(Footer, _super);
        function Footer() {
            _super.apply(this, arguments);
        }
        Footer.prototype.render = function () {
            return (React.createElement("footer", null, 
                React.createElement("p", null, "Footer")
            ));
        };
        return Footer;
    }(React.Component));
    exports.Footer = Footer;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    ;
    ;
    var Header = (function (_super) {
        __extends(Header, _super);
        function Header() {
            _super.apply(this, arguments);
        }
        Header.prototype.render = function () {
            return (React.createElement("header", null, 
                React.createElement("h1", null, "Main title")
            ));
        };
        return Header;
    }(React.Component));
    exports.Header = Header;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', './header', './footer'], function (require, exports, React, header_1, footer_1) {
    "use strict";
    ;
    ;
    var Page = (function (_super) {
        __extends(Page, _super);
        function Page() {
            _super.apply(this, arguments);
        }
        Page.prototype.render = function () {
            return (React.createElement("div", null, 
                React.createElement(header_1.Header, null), 
                React.createElement("main", null), 
                React.createElement(footer_1.Footer, null)));
        };
        return Page;
    }(React.Component));
    exports.Page = Page;
});
