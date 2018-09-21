"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
	currentUser: null
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var updated = Object.assign({}, state);

	switch (action.type) {
		case constants.CURRENT_USER_RECEIVED:
			updated.currentUser = action.data.user;
			return updated;

		default:
			return updated;
	}
};