"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initalState = {
    currentLocation: { lat: 40.7224017, lng: -73.9896719 }
};

module.exports = function (_x, action) {
    var state = arguments[0] === undefined ? initalState : arguments[0];
    var updated = Object.assign({}, state);
    switch (action.type) {
        case constants.LOCATION_CHANGED:
            console.log("Location changed", JSON.stringify(action.data));
            updated.currentLocation = action.data;
            return updated;
        default:
            return updated;
    }
};