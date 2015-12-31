/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

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


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_indexController) {
		var _indexController2 = _interopRequireDefault(_indexController);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		angular.module(['SocialShareApp'], ['ngSocialShare']).controller('indexController', _indexController2.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var IndexController = function IndexController() {
	        _classCallCheck(this, IndexController);

	        this.shareOptions1 = {
	            enabledNetworks: ['twitter', 'pinterest', 'googlePlus', 'email'],
	            title: 'Paradise - ColdpLay',
	            description: 'Lord of Mercy I\'m beggin u please. POwerful',
	            url: 'http://musejam.com',
	            networks: {
	                facebook: {
	                    title: '',
	                    description: '',
	                    caption: '',
	                    appId: null,
	                    loadWidget: false
	                },
	                twitter: {
	                    text: '',
	                    url: '',
	                    hashtags: 'ColdpLay,Paradise',
	                    via: 'rishabm',
	                    related: 'psvalent88'
	                },
	                pinterest: {
	                    description: ''
	                },
	                googlePlus: {},
	                email: {
	                    title: '',
	                    description: ''
	                },
	                whatsapp: {
	                    description: ''
	                }
	            }
	        };
	        this.shareOptions2 = {
	            enabledNetworks: ['facebook', 'pinterest', 'twitter', 'email'],
	            title: 'OO yeah',
	            description: 'Adele',
	            url: window.location.url,
	            networks: {
	                facebook: {
	                    title: '',
	                    description: '',
	                    caption: '',
	                    appId: null,
	                    loadWidget: false
	                },
	                twitter: {
	                    text: '',
	                    url: '',
	                    hashtags: '',
	                    via: 'musejam',
	                    related: ''
	                },
	                pinterest: {
	                    description: ''
	                },
	                googlePlus: {},
	                email: {
	                    title: '',
	                    description: ''
	                },
	                whatsapp: {
	                    description: ''
	                }
	            }
	        };
	    };

	    exports.default = IndexController;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);