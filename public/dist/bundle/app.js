/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, server, private, scripts, dependencies, devDependencies, deploy, format, app, default */
/***/ (function(module) {

module.exports = {"name":"garage-sale","version":"0.0.0","server":false,"private":true,"scripts":{"dev":"webpack --mode development -w","build":"npm run clean && cross-env NODE_ENV=production webpack -p && gulp prod","clean":"rimraf ./public/dist","postinstall":"npm run build"},"dependencies":{"accepts":"^1.3.5","array-flatten":"1.1.1","bluebird":"^3.5.1","body-parser":"1.18.2","content-disposition":"0.5.2","content-type":"^1.0.4","cookie":"0.3.1","cookie-signature":"1.0.6","debug":"2.6.9","depd":"^1.1.2","dotenv":"^5.0.1","encodeurl":"^1.0.2","escape-html":"^1.0.3","etag":"^1.8.1","finalhandler":"1.1.1","fresh":"0.5.2","merge-descriptors":"1.0.1","methods":"^1.1.2","moment":"^2.20.1","nodemon":"^1.17.1","on-finished":"^2.3.0","parseurl":"^1.3.2","path-to-regexp":"0.1.7","proxy-addr":"^2.0.3","qs":"6.5.1","range-parser":"^1.2.0","react":"^16.4.2","react-bootstrap":"^0.32.1","react-dom":"^16.4.2","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","redux":"^4.0.0","redux-thunk":"^2.3.0","safe-buffer":"5.1.1","send":"0.16.2","serve-static":"1.13.2","setprototypeof":"1.1.0","statuses":"^1.4.0","superagent":"^3.8.2","type-is":"^1.6.16","utils-merge":"1.0.1","vary":"^1.1.2","vertex360":"latest"},"devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","chai":"^4.1.2","chai-http":"^3.0.0","cross-env":"^5.1.4","gulp":"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.10.0","gulp-concat":"^2.6.1","gulp-less":"^4.0.1","gulp-rename":"^1.4.0","gulp-sass":"^3.2.1","gulp-uglify":"^3.0.1","json-loader":"^0.5.7","mocha":"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1","rimraf":"^2.6.2","turbo360":"^1.6.35","uglifyjs-webpack-plugin":"^1.2.2","webpack":"^4.1.1","webpack-cli":"^2.1.5"},"deploy":["."],"format":"vertex","app":""};

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	addItem: function addItem(item) {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.post('/api/item', item, _constants2.default.ITEM_ADDED));
		};
	},

	fetchItems: function fetchItems(params) {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.get('/api/item', params, _constants2.default.ITEMS_RECEIVED));
		};
	},

	submitOrder: function submitOrder(order) {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.post('/api/order', order, null));
		};
	},

	sendEmail: function sendEmail(email) {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.post('/email/send', email, null));
		};
	},

	locationChanged: function locationChanged(location) {
		return {
			type: _constants2.default.LOCATION_CHANGED,
			data: location
		};
	},

	currentUser: function currentUser() {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.get('/auth/currentuser', null, _constants2.default.CURRENT_USER_RECEIVED));
		};
	}

};

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ./presentation/index */ "./src/components/presentation/index.js");

var _Search = __webpack_require__(/*! ./containers/Search */ "./src/components/containers/Search.js");

var _Search2 = _interopRequireDefault(_Search);

var _Results = __webpack_require__(/*! ./containers/Results */ "./src/components/containers/Results.js");

var _Results2 = _interopRequireDefault(_Results);

var _Nav = __webpack_require__(/*! ./containers/Nav */ "./src/components/containers/Nav.js");

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'sidebar', 'data-background-color': 'white', 'data-active-color': 'danger' },
                        _react2.default.createElement(_Search2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'main-panel' },
                        _react2.default.createElement(_Nav2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'content' },
                            _react2.default.createElement(_Results2.default, null)
                        ),
                        _react2.default.createElement(_index.Footer, null)
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ "./src/components/containers/Nav.js":
/*!******************************************!*\
  !*** ./src/components/containers/Nav.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
    _inherits(Nav, _Component);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: 'render',
        value: function render() {
            var currentUser = this.props.account.currentUser;
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default', style: { background: 'black' } },
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar-header' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'navbar-toggle' },
                            _react2.default.createElement(
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            _react2.default.createElement('span', { className: 'icon-bar bar1' }),
                            _react2.default.createElement('span', { className: 'icon-bar bar2' }),
                            _react2.default.createElement('span', { className: 'icon-bar bar3' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'navbar-brand', href: '#', style: { color: 'white' } },
                            'Stock ',
                            _react2.default.createElement(
                                'a',
                                { style: { color: '#25CB1E' } },
                                'X'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'collapse navbar-collapse' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav navbar-nav navbar-right' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                    _react2.default.createElement('i', { className: 'ti-panel' }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Stats'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'dropdown' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                    _react2.default.createElement('i', { className: 'ti-bell' }),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'notification' },
                                        '5'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Notifications'
                                    ),
                                    _react2.default.createElement('b', { className: 'caret' })
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'dropdown-menu' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Notification 1'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Notification 2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Notification 3'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Notification 4'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Another notification'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    currentUser == null ? null : _react2.default.createElement(
                                        'p',
                                        null,
                                        ' Welcome ',
                                        currentUser.username,
                                        ' '
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Nav;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    return {
        account: state.account
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps)(Nav);

/***/ }),

/***/ "./src/components/containers/Results.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Results.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Item = __webpack_require__(/*! ../presentation/Item */ "./src/components/presentation/Item.js");

var _Item2 = _interopRequireDefault(_Item);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _actions2 = _interopRequireDefault(_actions);

var _reactDropzone = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _turbo = __webpack_require__(/*! turbo360 */ "./node_modules/turbo360/dist/index.js");

var _turbo2 = _interopRequireDefault(_turbo);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
    _inherits(Results, _Component);

    function Results() {
        _classCallCheck(this, Results);

        var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

        _this.state = {
            showModal: false,
            item: {
                //position: { lat: 40.71224117, lng: -73.9995892 }
            },
            order: {}
        };
        return _this;
    }

    _createClass(Results, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchItems();
        }
    }, {
        key: 'updateItem',
        value: function updateItem(attr, event) {
            event.preventDefault();
            var updated = Object.assign({}, this.state.item);
            updated[attr] = event.target.value;
            this.setState({
                item: updated
            });
        }
    }, {
        key: 'addItem',
        value: function addItem() {
            if (this.props.account.currentUser == null) {
                alert('Please log in or register to sell items');
                return;
            }

            var currentUser = this.props.account.currentUser;
            var updated = Object.assign({}, this.state.item);
            updated['position'] = this.props.map.currentLocation;
            updated['seller'] = {
                id: currentUser.id,
                username: currentUser.username,
                image: currentUser.image || ''

                // console.log('ADD ITEM: ' + JSON.stringify(updated))
            };this.props.addItem(updated).then(function (data) {
                console.log('ITEM ADDED:' + JSON.stringify(data));
            }).catch(function (err) {
                console.log('ERROR: ' + err.message);
            });
        }
    }, {
        key: 'uploadImage',
        value: function uploadImage(files) {
            var _this2 = this;

            var image = files[0];
            var api_key = 'a0119bae-2bbf-458b-b3ac-63e4118fa268';
            console.log('uploadImage: ' + image.name);
            var turboClient = (0, _turbo2.default)({ site_id: '5ba2cb573fb93a0013741b33' });

            turboClient.uploadFile(image, api_key).then(function (data) {
                var updated = Object.assign({}, _this2.state.item);
                updated['image'] = data.result.url;
                _this2.setState({
                    item: updated
                });
            }).catch(function (err) {
                console.log('Upload ERROR: ' + err.message);
            });
        }
    }, {
        key: 'onPurchase',
        value: function onPurchase(item, e) {
            e.preventDefault();
            this.setState({
                showModal: true,
                selectedItem: item
            });

            console.log('on purchase: ' + JSON.stringify(item));
        }
    }, {
        key: 'updateOrder',
        value: function updateOrder(e) {
            console.log('update order: ' + e.target.value);
            var updated = Object.assign({}, this.state.order);
            updated['message'] = e.target.value;
            this.setState({
                order: updated
            });
        }
    }, {
        key: 'submitOrder',
        value: function submitOrder() {
            var _this3 = this;

            var updated = Object.assign({}, this.state.order);
            updated['item'] = this.state.selectedItem;
            updated['buyer'] = {
                id: this.props.account.currentUser.id,
                username: this.props.account.currentUser.username,
                email: this.props.account.currentUser.email
            };

            console.log('submit order: ' + JSON.stringify(updated));

            this.props.submitOrder(updated).then(function (data) {
                var email = {
                    fromemail: 'alejandro.ocanas35@gmail.com',
                    fromname: 'Garaje sale',
                    subject: 'You got a Purchase order!',
                    content: updated.message,
                    recipent: 'alejandro.ocanas35@gmail.com'
                };
                return _this3.props.sendEmail(email);
            }).then(function (data) {
                alert('Your order is ready!');
                _this3.setState({
                    showModal: false
                });
            }).catch(function (err) {
                alert('Ops..' + err.message);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var items = this.props.item.all || [];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        items.map(function (item, i) {
                            return _react2.default.createElement(_Item2.default, { key: item.id, onPurchase: _this4.onPurchase.bind(_this4, item), item: item });
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2.default.createElement(
                                'div',
                                { className: 'card' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'content' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'footer' },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            ' Add item '
                                        ),
                                        _react2.default.createElement('input', { type: 'text', onChange: this.updateItem.bind(this, 'name'), className: 'form-control', style: localStyle.input, placeholder: 'Name...' }),
                                        _react2.default.createElement('input', { type: 'text', onChange: this.updateItem.bind(this, 'price'), className: 'form-control', style: localStyle.input, placeholder: 'Price...' }),
                                        this.state.item.image == null ? null : _react2.default.createElement('img', { src: this.state.item.image + '=s240-c', style: { width: '100%' } }),
                                        _react2.default.createElement('hr', null),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'stats' },
                                            _react2.default.createElement(
                                                _reactDropzone2.default,
                                                { onDrop: this.uploadImage.bind(this), className: 'btn btn-info btn-fill', style: { marginRight: 16 } },
                                                'Add Image'
                                            ),
                                            _react2.default.createElement(
                                                'button',
                                                { onClick: this.addItem.bind(this), className: 'btn btn-success' },
                                                ' Add item'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { bsSize: 'lg', show: this.state.showModal, onHide: function onHide() {
                            _this4.setState({ showModal: false });
                        } },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        { style: localStyle.modal },
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Send a message!'
                        ),
                        _react2.default.createElement('hr', null),
                        _react2.default.createElement('textarea', { onChange: this.updateOrder.bind(this), className: 'form-control', placeholder: 'Enter message here...', style: localStyle.textarea }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submitOrder.bind(this), className: 'btn btn-success btn-fill' },
                            'Submit'
                        )
                    )
                )
            );
        }
    }]);

    return Results;
}(_react.Component);

var localStyle = {
    input: {
        marginBottom: '10px',
        border: '1px solid #ddd'
    },
    textarea: {
        border: '1px solid #ddd',
        height: 150,
        marginBottom: 16
    }
};

var stateToProps = function stateToProps(state) {
    return {
        item: state.item,
        map: state.map,
        account: state.account
    };
};

var callDispatchToProps = function callDispatchToProps(dispatch) {
    return {
        addItem: function addItem(item) {
            dispatch(_actions2.default.addItem(item));
        },
        fetchItems: function fetchItems(params) {
            return dispatch(_actions2.default.fetchItems(params));
        },
        submitOrder: function submitOrder(order) {
            return dispatch(_actions2.default.submitOrder(order));
        },
        sendEmail: function sendEmail(email) {
            return dispatch(_actions2.default.sendEmail(email));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, callDispatchToProps)(Results);

/***/ }),

/***/ "./src/components/containers/Search.js":
/*!*********************************************!*\
  !*** ./src/components/containers/Search.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(/*! ../presentation */ "./src/components/presentation/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search() {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

        _this.state = {
            map: null
        };
        return _this;
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.currentUser();
        }
    }, {
        key: 'centerChanged',
        value: function centerChanged(center) {
            console.log('Map moved: ' + JSON.stringify(center));
            this.props.locationChanged(center);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

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
            return _react2.default.createElement(
                'div',
                { className: 'sidebar-wrapper' },
                _react2.default.createElement(_presentation.Map, {
                    onMapReady: function onMapReady(map) {
                        if (_this2.state.map != null) return;

                        // console.log('OnMapReady: '+JSON.stringify(map.getCenter()))
                        _this2.setState({
                            map: map
                        });
                    },

                    locationChanged: this.centerChanged.bind(this),
                    markers: markers,
                    zoom: 14,
                    center: this.props.map.currentLocation,
                    containerElement: _react2.default.createElement('div', { style: { height: 100 + '%' } }),
                    mapElement: _react2.default.createElement('div', { style: { height: 100 + 'vh' } }) })
            );
        }
    }]);

    return Search;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    return {
        item: state.item,
        map: state.map
    };
};

var callDispatchToProps = function callDispatchToProps(dispatch) {
    return {
        locationChanged: function locationChanged(location) {
            return dispatch(_actions2.default.locationChanged(location));
        },
        currentUser: function currentUser() {
            return dispatch(_actions2.default.currentUser());
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, callDispatchToProps)(Search);

/***/ }),

/***/ "./src/components/presentation/Footer.js":
/*!***********************************************!*\
  !*** ./src/components/presentation/Footer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "footer",
        { className: "footer" },
        _react2.default.createElement(
            "div",
            { className: "container-fluid" },
            _react2.default.createElement(
                "nav",
                { className: "pull-left" },
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "http://www.creative-tim.com" },
                            "Creative Tim"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "http://blog.creative-tim.com" },
                            "Blog"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "http://www.creative-tim.com/license" },
                            "Licenses"
                        )
                    )
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "copyright pull-right" },
                "\xA9 ",
                _react2.default.createElement(
                    "script",
                    null,
                    "document.write(new Date().getFullYear())"
                ),
                ", made with ",
                _react2.default.createElement("i", { "class": "fa fa-heart heart" })
            )
        )
    );
};

/***/ }),

/***/ "./src/components/presentation/Item.js":
/*!*********************************************!*\
  !*** ./src/components/presentation/Item.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    var item = props.item;

    return _react2.default.createElement(
        "div",
        { className: "col-lg-3 col-sm-6" },
        _react2.default.createElement(
            "div",
            { className: "card" },
            _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    _react2.default.createElement(
                        "div",
                        { className: "col-xs-12" },
                        _react2.default.createElement(
                            "div",
                            { className: "numbers" },
                            _react2.default.createElement(
                                "p",
                                null,
                                item.name
                            ),
                            "$",
                            item.price
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "col-xs-12" },
                        _react2.default.createElement("img", { style: localStyle.itemImage, src: item.image })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "footer" },
                    _react2.default.createElement("hr", null),
                    _react2.default.createElement(
                        "div",
                        { className: "stats" },
                        _react2.default.createElement(
                            "button",
                            { className: "btn btn-success btn-fill", onClick: props.onPurchase.bind(undefined) },
                            " I'm interest "
                        )
                    )
                )
            )
        )
    );
};

var localStyle = {
    icon: {
        width: 28,
        borderRadius: 14,
        float: 'right'
    },
    itemImage: {
        width: 100 + '%',
        padding: 3,
        border: '1px solid #ddd',
        background: '#fffffa'
    }
};

/***/ }),

/***/ "./src/components/presentation/Map.js":
/*!********************************************!*\
  !*** ./src/components/presentation/Map.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
	_inherits(Map, _Component);

	function Map(props) {
		_classCallCheck(this, Map);

		var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

		_this.state = {
			map: null
		};
		return _this;
	}

	_createClass(Map, [{
		key: 'mapMoved',
		value: function mapMoved() {
			// console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
			if (this.props.locationChanged != null) this.props.locationChanged(this.state.map.getCenter());
		}
	}, {
		key: 'zoomChanged',
		value: function zoomChanged() {
			// console.log('zoomChanged: '+this.state.map.getZoom())

		}
	}, {
		key: 'mapLoaded',
		value: function mapLoaded(map) {
			if (this.state.map != null) return;

			this.props.onMapReady(map);
			this.setState({
				map: map
			});
		}
	}, {
		key: 'handleMarkerClick',
		value: function handleMarkerClick(marker) {
			if (this.props.markerClicked != null) this.props.markerClicked(marker, this.state.map);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var markers = this.props.markers || [];

			return _react2.default.createElement(
				_reactGoogleMaps.GoogleMap,
				{
					ref: this.mapLoaded.bind(this),
					onDragEnd: this.mapMoved.bind(this),
					onZoomChanged: this.zoomChanged.bind(this),
					defaultZoom: this.props.zoom,
					defaultCenter: this.props.center },
				markers.map(function (marker, index) {
					return _react2.default.createElement(_reactGoogleMaps.Marker, _extends({
						key: index,
						clickable: true,
						icon: marker.icon,
						label: marker.label,
						title: marker.key,
						onClick: _this2.handleMarkerClick.bind(_this2, marker)
					}, marker));
				})
			);
		}
	}]);

	return Map;
}(_react.Component);

exports.default = (0, _reactGoogleMaps.withGoogleMap)(Map);

/***/ }),

/***/ "./src/components/presentation/index.js":
/*!**********************************************!*\
  !*** ./src/components/presentation/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Map = exports.Item = exports.Footer = undefined;

var _Footer = __webpack_require__(/*! ./Footer */ "./src/components/presentation/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Item = __webpack_require__(/*! ./Item */ "./src/components/presentation/Item.js");

var _Item2 = _interopRequireDefault(_Item);

var _Map = __webpack_require__(/*! ./Map */ "./src/components/presentation/Map.js");

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Footer = _Footer2.default;
exports.Item = _Item2.default;
exports.Map = _Map2.default; //import Nav from './Nav'

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	LOCATION_CHANGED: 'LOCATION_CHANGED',
	ITEM_ADDED: 'ITEM_ADDED',
	ITEMS_RECEIVED: 'ITEMS_RECEIVED',
	CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED'
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(/*! ./stores */ "./src/stores/index.js");

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Home = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: _stores2.default.configure(null) },
	_react2.default.createElement(_Home2.default, null)
);

_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/accountReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/accountReducer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	currentUser: null
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var updated = Object.assign({}, state);

	switch (action.type) {
		case _constants2.default.CURRENT_USER_RECEIVED:
			updated['currentUser'] = action.data.user;
			return updated;

		default:
			return updated;
	}
};

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.accountReducer = exports.mapReducer = exports.itemReducer = exports.userReducer = undefined;

var _itemReducer = __webpack_require__(/*! ./itemReducer */ "./src/reducers/itemReducer.js");

var _itemReducer2 = _interopRequireDefault(_itemReducer);

var _userReducer = __webpack_require__(/*! ./userReducer */ "./src/reducers/userReducer.js");

var _userReducer2 = _interopRequireDefault(_userReducer);

var _mapReducer = __webpack_require__(/*! ./mapReducer */ "./src/reducers/mapReducer.js");

var _mapReducer2 = _interopRequireDefault(_mapReducer);

var _accountReducer = __webpack_require__(/*! ./accountReducer */ "./src/reducers/accountReducer.js");

var _accountReducer2 = _interopRequireDefault(_accountReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.userReducer = _userReducer2.default;
exports.itemReducer = _itemReducer2.default;
exports.mapReducer = _mapReducer2.default;
exports.accountReducer = _accountReducer2.default;

/***/ }),

/***/ "./src/reducers/itemReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/itemReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	all: null
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var updated = Object.assign({}, state);

	switch (action.type) {
		case _constants2.default.ITEM_ADDED:
			var payload = action.data;
			var all = Object.assign([], updated.all);
			all.unshift(payload.data);
			updated['all'] = all;

			return updated;

		case _constants2.default.ITEMS_RECEIVED:
			updated['all'] = action.data.data;
			return updated;

		default:
			return updated;
	}
};

/***/ }),

/***/ "./src/reducers/mapReducer.js":
/*!************************************!*\
  !*** ./src/reducers/mapReducer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initalState = {
    currentLocation: { lat: 40.7224017, lng: -73.9896719 }
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
    var action = arguments[1];

    var updated = Object.assign({}, state);
    switch (action.type) {
        case _constants2.default.LOCATION_CHANGED:
            console.log('Location changed', JSON.stringify(action.data));
            updated['currentLocation'] = action.data;
            return updated;
        default:
            return updated;
    }
};

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.CURRENT_USER_RECEIVED:
			newState['currentUser'] = action.data;
			return newState;

		case _constants2.default.USERS_RECEIVED:
			newState['all'] = action.data;
			return newState;

		case _constants2.default.USER_CREATED:
			var array = newState.all ? Object.assign([], newState.all) : [];
			array.unshift(action.data);
			newState['all'] = array;
			return newState;

		default:
			return state;
	}
};

/***/ }),

/***/ "./src/stores/index.js":
/*!*****************************!*\
  !*** ./src/stores/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store;
exports.default = {

	configure: function configure(initialState) {
		var reducers = (0, _redux.combineReducers)({
			user: _reducers.userReducer,
			item: _reducers.itemReducer,
			map: _reducers.mapReducer,
			account: _reducers.accountReducer
		});

		if (initialState) {
			store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

			return store;
		}

		store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

		return store;
	},

	currentStore: function currentStore() {
		return store;
	}
};

/***/ }),

/***/ "./src/utils/HTTPAsync.js":
/*!********************************!*\
  !*** ./src/utils/HTTPAsync.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// standard superagent get request:
var getRequst = function getRequst(url, params) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.get(url).query(params).set('Accept', 'application/json').end(function (err, response) {
			if (err) {
				reject(err);
				return;
			}

			var payload = response.body || response.text;
			resolve(payload);
		});
	});
};

var postRequst = function postRequst(url, body) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.post(url).send(body).set('Accept', 'application/json').end(function (err, response) {
			if (err) {
				reject(err);
				return;
			}

			var payload = response.body || response.text;
			resolve(payload);
		});
	});
};

exports.default = {
	post: function post(url, body, actionType) {
		return function (dispatch) {
			return postRequst(url, body).then(function (data) {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null) {
					dispatch({
						type: actionType,
						data: data
					});
				}

				return data;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	get: function get(url, params, actionType) {
		return function (dispatch) {
			return getRequst(url, params).then(function (data) {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null) {
					console.log('actionType: ' + actionType);
					dispatch({
						type: actionType,
						data: data
					});
				}

				return data;
			}).catch(function (err) {
				throw err;
			});
		};
	}

};

/***/ }),

/***/ "./src/utils/HTTPClient.js":
/*!*********************************!*\
  !*** ./src/utils/HTTPClient.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(endpoint, params, headers) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.get(endpoint).query(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var post = function post(endpoint, params, headers) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.post(endpoint).send(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var put = function put(endpoint, params, headers) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.put(endpoint).send(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var deleteReq = function deleteReq(endpoint, params, headers) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.delete(endpoint).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

exports.default = {
	get: get,
	// getAsync: (endpoint, params, headers, actionType) => {
	getAsync: function getAsync(pkg) {
		return function (dispatch) {
			return get(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	post: post,
	postAsync: function postAsync(pkg) {
		return function (dispatch) {
			return post(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	put: put,
	putAsync: function putAsync(pkg) {
		return function (dispatch) {
			return put(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	delete: deleteReq,
	deleteAsync: function deleteAsync(pkg) {
		return function (dispatch) {
			return deleteReq(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			}).catch(function (err) {
				throw err;
			});
		};
	}
};

/***/ }),

/***/ "./src/utils/ServerEntry.js":
/*!**********************************!*\
  !*** ./src/utils/ServerEntry.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: props.store },
		props.component
	);
};

/***/ }),

/***/ "./src/utils/TurboClient.js":
/*!**********************************!*\
  !*** ./src/utils/TurboClient.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _turbo = __webpack_require__(/*! turbo360 */ "./node_modules/turbo360/dist/index.js");

var _turbo2 = _interopRequireDefault(_turbo);

var _package = __webpack_require__(/*! ../../package.json */ "./package.json");

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ID = _package2.default.app || '';

var postRequest = function postRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).create(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var getRequest = function getRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).fetch(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var putRequest = function putRequest(resource, entity, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).update(resource, entity, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var deleteRequest = function deleteRequest(resource, entity, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).remove(resource, entity).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var createUser = function createUser(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).createUser(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var login = function login(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).login(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var currentUser = function currentUser(actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).currentUser().then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var uploadFile = function uploadFile(file) {
	return (0, _turbo2.default)({ site_id: APP_ID }).uploadFile(file); // returns a Promise
};

exports.default = {

	getRequest: getRequest,
	postRequest: postRequest,
	putRequest: putRequest,
	deleteRequest: deleteRequest,
	createUser: createUser,
	login: login,
	currentUser: currentUser,
	uploadFile: uploadFile

};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HTTPAsync = exports.renderComponents = exports.ServerEntry = exports.HTTPClient = exports.TurboClient = undefined;

var _TurboClient = __webpack_require__(/*! ./TurboClient */ "./src/utils/TurboClient.js");

var _TurboClient2 = _interopRequireDefault(_TurboClient);

var _HTTPClient = __webpack_require__(/*! ./HTTPClient */ "./src/utils/HTTPClient.js");

var _HTTPClient2 = _interopRequireDefault(_HTTPClient);

var _HTTPAsync = __webpack_require__(/*! ./HTTPAsync */ "./src/utils/HTTPAsync.js");

var _HTTPAsync2 = _interopRequireDefault(_HTTPAsync);

var _ServerEntry = __webpack_require__(/*! ./ServerEntry */ "./src/utils/ServerEntry.js");

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

var _renderComponents = __webpack_require__(/*! ./renderComponents */ "./src/utils/renderComponents.js");

var _renderComponents2 = _interopRequireDefault(_renderComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TurboClient = _TurboClient2.default;
exports.HTTPClient = _HTTPClient2.default;
exports.ServerEntry = _ServerEntry2.default;
exports.renderComponents = _renderComponents2.default;
exports.HTTPAsync = _HTTPAsync2.default;

/***/ }),

/***/ "./src/utils/renderComponents.js":
/*!***************************************!*\
  !*** ./src/utils/renderComponents.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");

var _server2 = _interopRequireDefault(_server);

var _ServerEntry = __webpack_require__(/*! ./ServerEntry */ "./src/utils/ServerEntry.js");

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState, component) {
	var app = _react2.default.createElement(component);
	var provider = _react2.default.createElement(_ServerEntry2.default, { component: app, store: initialState });

	return {
		react: _server2.default.renderToString(provider),
		initial: JSON.stringify(initialState.getState())
	};
};

/***/ })

/******/ });
//# sourceMappingURL=app.map