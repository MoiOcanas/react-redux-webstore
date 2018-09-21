"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
	all: null
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var updated = Object.assign({}, state);

	switch (action.type) {
		case constants.ITEM_ADDED:
			var payload = action.data;
			var all = Object.assign([], updated.all);

			all.unshift(payload.data);
			updated.all = all;

			return updated;

		case constants.ITEMS_RECEIVED:
			updated.all = action.data.data;
			return updated;

		default:
			return updated;
	}
};