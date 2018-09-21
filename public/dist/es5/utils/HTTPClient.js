"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var Promise = _interopRequire(require("bluebird"));

var get = function (endpoint, params, headers) {
	return new Promise(function (resolve, reject) {
		superagent.get(endpoint).query(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var post = function (endpoint, params, headers) {
	return new Promise(function (resolve, reject) {
		superagent.post(endpoint).send(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var put = function (endpoint, params, headers) {
	return new Promise(function (resolve, reject) {
		superagent.put(endpoint).send(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var deleteReq = function (endpoint, params, headers) {
	return new Promise(function (resolve, reject) {
		superagent["delete"](endpoint).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

module.exports = {
	get: get,
	// getAsync: (endpoint, params, headers, actionType) => {
	getAsync: function (pkg) {
		return function (dispatch) {
			return get(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			})["catch"](function (err) {
				throw err;
			});
		};
	},

	post: post,
	postAsync: function (pkg) {
		return function (dispatch) {
			return post(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			})["catch"](function (err) {
				throw err;
			});
		};
	},

	put: put,
	putAsync: function (pkg) {
		return function (dispatch) {
			return put(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			})["catch"](function (err) {
				throw err;
			});
		};
	},

	"delete": deleteReq,
	deleteAsync: function (pkg) {
		return function (dispatch) {
			return deleteReq(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			})["catch"](function (err) {
				throw err;
			});
		};
	}
};