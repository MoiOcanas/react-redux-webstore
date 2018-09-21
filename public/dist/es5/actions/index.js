"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var HTTPAsync = require("../utils").HTTPAsync;
module.exports = {

	addItem: function (item) {
		return function (dispatch) {
			return dispatch(HTTPAsync.post("/api/item", item, constants.ITEM_ADDED));
		};
	},

	fetchItems: function (params) {
		return function (dispatch) {
			return dispatch(HTTPAsync.get("/api/item", params, constants.ITEMS_RECEIVED));
		};
	},

	submitOrder: function (order) {
		return function (dispatch) {
			return dispatch(HTTPAsync.post("/api/order", order, null));
		};
	},

	sendEmail: function (email) {
		return function (dispatch) {
			return dispatch(HTTPAsync.post("/email/send", email, null));
		};
	},

	locationChanged: function (location) {
		return {
			type: constants.LOCATION_CHANGED,
			data: location
		};
	},

	currentUser: function () {
		return function (dispatch) {
			return dispatch(HTTPAsync.get("/auth/currentuser", null, constants.CURRENT_USER_RECEIVED));
		};
	}

};