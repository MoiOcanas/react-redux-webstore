"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Map = require("../presentation").Map;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Search = (function (Component) {
    function Search() {
        _classCallCheck(this, Search);

        _get(Object.getPrototypeOf(Search.prototype), "constructor", this).call(this);

        this.state = {
            map: null
        };
    }

    _inherits(Search, Component);

    _prototypeProperties(Search, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.currentUser();
            },
            writable: true,
            configurable: true
        },
        centerChanged: {
            value: function centerChanged(center) {
                console.log("Map moved: " + JSON.stringify(center));
                this.props.locationChanged(center);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;
                var items = this.props.item.all || [];
                var markers = [];
                items.forEach(function (item, i) {
                    var marker = {
                        key: item.id,
                        label: item.name,
                        position: item.position,
                        defaultAnimation: 2
                    };

                    markers.push(marker);
                });
                return React.createElement(
                    "div",
                    { className: "sidebar-wrapper" },
                    React.createElement(Map, {
                        onMapReady: function (map) {
                            if (_this.state.map != null) return;

                            _this.setState({
                                map: map
                            });
                        },

                        locationChanged: this.centerChanged.bind(this),
                        markers: markers,
                        zoom: 14,
                        center: this.props.map.currentLocation,
                        containerElement: React.createElement("div", { style: { height: 100 + "%" } }),
                        mapElement: React.createElement("div", { style: { height: 100 + "vh" } }) })
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Search;
})(Component);

var stateToProps = function (state) {
    return {
        item: state.item,
        map: state.map
    };
};

var callDispatchToProps = function (dispatch) {
    return {
        locationChanged: function (location) {
            return dispatch(actions.locationChanged(location));
        },
        currentUser: function () {
            return dispatch(actions.currentUser());
        }
    };
};

module.exports = connect(stateToProps, callDispatchToProps)(Search);
// console.log('OnMapReady: '+JSON.stringify(map.getCenter()))