"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var Promise = _interopRequire(require("bluebird"));

// standard superagent get request:
var getRequst = function (url, params) {
	return new Promise(function (resolve, reject) {
		superagent.get(url).query(params).set("Accept", "application/json").end(function (err, response) {
			if (err) {
				reject(err);
				return;
			}

			var payload = response.body || response.text;
			resolve(payload);
		});
	});
};

var postRequst = function (url, body) {
	return new Promise(function (resolve, reject) {
		superagent.post(url).send(body).set("Accept", "application/json").end(function (err, response) {
			if (err) {
				reject(err);
				return;
			}

			var payload = response.body || response.text;
			resolve(payload);
		});
	});
};

module.exports = {
	post: function (url, body, actionType) {
		return function (dispatch) {
			return postRequst(url, body).then(function (data) {
				//console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null) {
					console.log("action type: " + actionType);
					dispatch({
						type: actionType,
						data: data
					});
				}

				return data;
			})["catch"](function (err) {
				throw err;
			});
		};
	},

	get: function (url, params, actionType) {
		return function (dispatch) {
			return getRequst(url, params).then(function (data) {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null) {
					dispatch({
						type: actionType,
						data: data
					});
				}

				return data;
			})["catch"](function (err) {
				throw err;
			});
		};
	}

};