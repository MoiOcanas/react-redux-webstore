"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var Nav = (function (Component) {
    function Nav() {
        _classCallCheck(this, Nav);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Nav, Component);

    _prototypeProperties(Nav, null, {
        render: {
            value: function render() {
                var currentUser = this.props.account.currentUser;
                return React.createElement(
                    "nav",
                    { className: "navbar navbar-default", style: { background: "black" } },
                    React.createElement(
                        "div",
                        { className: "container-fluid" },
                        React.createElement(
                            "div",
                            { className: "navbar-header" },
                            React.createElement(
                                "button",
                                { type: "button", className: "navbar-toggle" },
                                React.createElement(
                                    "span",
                                    { className: "sr-only" },
                                    "Toggle navigation"
                                ),
                                React.createElement("span", { className: "icon-bar bar1" }),
                                React.createElement("span", { className: "icon-bar bar2" }),
                                React.createElement("span", { className: "icon-bar bar3" })
                            ),
                            React.createElement(
                                "a",
                                { className: "navbar-brand", href: "#", style: { color: "white" } },
                                "Stock ",
                                React.createElement(
                                    "a",
                                    { style: { color: "#25CB1E" } },
                                    "X"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "collapse navbar-collapse" },
                            React.createElement(
                                "ul",
                                { className: "nav navbar-nav navbar-right" },
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                        React.createElement("i", { className: "ti-panel" }),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Stats"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "dropdown" },
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                        React.createElement("i", { className: "ti-bell" }),
                                        React.createElement(
                                            "p",
                                            { className: "notification" },
                                            "5"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Notifications"
                                        ),
                                        React.createElement("b", { className: "caret" })
                                    ),
                                    React.createElement(
                                        "ul",
                                        { className: "dropdown-menu" },
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Notification 1"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Notification 2"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Notification 3"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Notification 4"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "Another notification"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        currentUser == null ? null : React.createElement(
                                            "p",
                                            null,
                                            " Welcome ",
                                            currentUser.username,
                                            " "
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Nav;
})(Component);

var stateToProps = function (state) {
    return {
        account: state.account
    };
};

module.exports = connect(stateToProps)(Nav);