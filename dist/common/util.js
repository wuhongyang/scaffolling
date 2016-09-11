/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"js/index","1":"js/main","3":"vendor"}[chunkId]||chunkId) + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(201);
	module.exports = __webpack_require__(279);


/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by Administrator on 2016/8/19.
	 */
	var Util = function () {
	    function Util() {
	        _classCallCheck(this, Util);
	    }

	    _createClass(Util, null, [{
	        key: "init",
	        value: function init() {
	            return "init";
	        }
	    }, {
	        key: "getUrlParam",
	        value: function getUrlParam(name) {
	            var reg = new RegExp("^|&" + name + "=([^&]*)()&|$");
	            var r = window.location.search.substr(1).match(reg);
	            return r != null ? unescape(r[2]) : null;
	        }
	    }, {
	        key: "getCurrentHash",
	        value: function getCurrentHash() {
	            return window.location.hash.replace(/^.*#\//g, "").replace(/\?.*$/g, "");
	        }
	    }, {
	        key: "extends",
	        value: function _extends(target) {
	            for (var _len = arguments.length, param = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                param[_key - 1] = arguments[_key];
	            }

	            for (var i = 1; i < arguments.length; i++) {
	                var source = arguments[i];
	                for (var key in source) {
	                    if (Object.prototype.hasOwnProperty.call(source, key)) {
	                        target[key] = source[key];
	                    }
	                }
	            }
	            return target;
	        }
	    }, {
	        key: "isEmptyObject",
	        value: function isEmptyObject(object) {
	            for (var p in object) {
	                if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	            }return true;
	        }
	    }, {
	        key: "numberToArray",
	        value: function numberToArray(number) {
	            var a = [];
	            for (var i = 1; i <= number; i++) {
	                a.push(i);
	            }
	            return a;
	        }
	    }, {
	        key: "createChildrenByType",
	        value: function createChildrenByType(data) {
	            switch (typeof data === "undefined" ? "undefined" : _typeof(data)) {
	                case "string":

	                    break;
	                default:

	                    break;
	            }
	        }
	    }, {
	        key: "single",
	        value: function single(number) {}
	    }]);

	    return Util;
	}();

	exports.default = Util;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "util.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Administrator on 2016/8/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _static = __webpack_require__(280);

	var _static2 = _interopRequireDefault(_static);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var XHR = function () {
	    function XHR() {
	        _classCallCheck(this, XHR);
	    }

	    _createClass(XHR, null, [{
	        key: "fetch",
	        value: function (_fetch) {
	            function fetch(_x, _x2) {
	                return _fetch.apply(this, arguments);
	            }

	            fetch.toString = function () {
	                return _fetch.toString();
	            };

	            return fetch;
	        }(function (obj, callBack) {
	            fetch(_static2.default.URL[obj.type]).then(function (res) {
	                if (res.ok) {
	                    res.json().then(function (data) {
	                        callBack(data);
	                    });
	                } else {}
	            }, function (e) {});
	        })
	    }]);

	    return XHR;
	}();

	exports.default = XHR;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "xhr.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by Administrator on 2016/8/15.
	 */
	var INVARIANT = {
	    PATH: {
	        main: "./pages/main.html",
	        index: "./pages/index.html"
	    },
	    URL: {
	        "SET": "../api/listDemo.json",
	        "PAGE": "../api/pageDemo.json"
	    }

	};
	exports.default = INVARIANT;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\xietong\\myCode\\scaffolding\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "static.variable.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

/******/ });