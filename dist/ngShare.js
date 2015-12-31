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

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_socialShareDirective, _socialShareService, _indexController) {
		var _socialShareDirective2 = _interopRequireDefault(_socialShareDirective);

		var _socialShareService2 = _interopRequireDefault(_socialShareService);

		var _indexController2 = _interopRequireDefault(_indexController);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		angular.module(['SocialShare'], []).service('SocialShareService', _socialShareService2.default).directive('socialShare', _socialShareDirective2.default.directiveFactory).controller('indexController', _indexController2.default);
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

	    var _createClass = (function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    })();

	    var SocialShareDirective = (function () {
	        function SocialShareDirective($timeout, SocialShareService, $compile) {
	            _classCallCheck(this, SocialShareDirective);

	            this.restrict = 'E';
	            this.$timeout = $timeout;
	            this.$compile = $compile;
	            this.SocialShareService = SocialShareService;
	            this.replace = true;
	            this.template = '<div>\n\t\t\t\t\t\t    <button class="shareButton"><span class="icon-share"></span></button>\n\t\t\t\t\t\t    <div class="networksHolder">\n\t\t\t\t\t\t    \t<ul class="networksList">\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>';
	            this.scope = {
	                options: '='
	            };
	        }

	        _createClass(SocialShareDirective, [{
	            key: 'compile',
	            value: function compile($el) {
	                var _this = this;

	                var $networksHolder = $el.find('.networksHolder');
	                this.$timeout(function () {
	                    $el.on('click', function () {
	                        $networksHolder.fadeToggle();
	                    });
	                });
	                return function ($scope, $el, $attrs) {
	                    $scope.$watch(function () {
	                        return $scope.options;
	                    }, function (n, o) {
	                        if (!n) return;

	                        var options = _this.SocialShareService.mergeOptions($scope.options);

	                        _this.$timeout(function () {
	                            _this.SocialShareService.run($networksHolder, options);

	                            _this.$compile($el)($scope);
	                        });
	                    });
	                };
	            }
	        }], [{
	            key: 'directiveFactory',
	            value: function directiveFactory($timeout, SocialShareService, $compile) {
	                SocialShareDirective.instance = new SocialShareDirective($timeout, SocialShareService, $compile);
	                return SocialShareDirective.instance;
	            }
	        }]);

	        return SocialShareDirective;
	    })();

	    exports.default = SocialShareDirective;
	    SocialShareDirective.$inject = ['$timeout', 'SocialShareService', '$compile'];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
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

	    var _createClass = (function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    })();

	    var SocialShareService = (function () {
	        function SocialShareService($document, $window) {
	            _classCallCheck(this, SocialShareService);

	            this.enabledNetworks = ['facebook', 'twitter', 'pinterest', 'googlePlus', 'whatsapp', 'email'];
	            this.$document = $document;
	            this.options = {
	                enabledNetworks: this.enabledNetworks,
	                title: this._defaultTitle,
	                image: this._defaultImage,
	                description: this._defaultDescription(),
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
	                        via: '',
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
	        }

	        _createClass(SocialShareService, [{
	            key: '_defaultTitle',
	            value: function _defaultTitle() {
	                var content = undefined;
	                if (content = this.$document.find('meta[property="og:title"]').text() || this.$document.find('meta[name="twitter:title"]').text()) return content.getAttribute('content');else if (content = this.$document.find('title').text()) return content.textContent || content.innerText;
	            }
	        }, {
	            key: '_defaultImage',
	            value: function _defaultImage() {
	                var content = undefined;
	                if (content = this.$document.find('meta[property="og:image"]').text() || this.$document.find('meta[name="twitter:image"]').text()) return content.getAttribute('content');
	            }
	        }, {
	            key: '_defaultDescription',
	            value: function _defaultDescription() {
	                var content = undefined;
	                if (content = this.$document.find('meta[property="og:description"]').text() || this.$document.find('meta[name="twitter:description"]').text() || this.$document.find('meta[name="description"]').text()) return content.getAttribute('content');else return '';
	            }
	        }, {
	            key: 'mergeOptions',
	            value: function mergeOptions(userOpts) {
	                return angular.extend(angular.copy(this.options), userOpts);
	            }
	        }, {
	            key: 'fCap',
	            value: function fCap(string) {
	                return string.charAt(0).toUpperCase() + string.slice(1);
	            }
	        }, {
	            key: '_openWindowPopup',
	            value: function _openWindowPopup(uri) {
	                var isEmail = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	                var popup = {
	                    width: 500,
	                    height: 350
	                };
	                popup.top = screen.height / 2 - popup.height / 2;
	                popup.left = screen.width / 2 - popup.width / 2;

	                if (isEmail) {
	                    return window.open(uri, '_blank');
	                }

	                window.open(uri, 'targetWindow', '\n\t\t\ttoolbar=no,\n\t\t\tlocation=no,\n\t\t\tstatus=no,\n\t\t\tmenubar=no,\n\t\t\tscrollbars=yes,\n\t\t\tresizable=yes,\n\t\t\tleft=' + popup.left + ',\n\t\t\ttop=' + popup.top + ',\n\t\t\twidth=' + popup.width + ',\n\t\t\theight=' + popup.height);
	            }
	        }, {
	            key: '_attachClickHandler',
	            value: function _attachClickHandler($el, isEmail) {
	                var self = this;
	                $el.on('click', function (e) {
	                    e.preventDefault();

	                    self._openWindowPopup(this.href, isEmail);
	                });
	            }
	        }, {
	            key: '_populateNetworksHolder',
	            value: function _populateNetworksHolder($el, enabledNetworks) {
	                var networks = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = enabledNetworks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var n = _step.value;
	                        if (this.enabledNetworks.indexOf(n) > -1) networks.push(n);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = networks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var n = _step2.value;
	                        $el.find('ul').append('<a class="networkItem"><span class="icon-' + n + '"></span></a>');
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                return networks;
	            }
	        }, {
	            key: 'run',
	            value: function run($el, options) {
	                var networks = this._populateNetworksHolder($el, this.options.enabledNetworks);

	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                    for (var _iterator3 = networks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var network = _step3.value;
	                        this['_network' + this.fCap(network)] ? this['_network' + this.fCap(network)]($el, options) : angular.noop();
	                    }
	                } catch (err) {
	                    _didIteratorError3 = true;
	                    _iteratorError3 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                            _iterator3.return();
	                        }
	                    } finally {
	                        if (_didIteratorError3) {
	                            throw _iteratorError3;
	                        }
	                    }
	                }
	            }
	        }, {
	            key: '_networkFacebook',
	            value: function _networkFacebook($el, options) {
	                if ($t = $el.find('.icon-facebook')) {
	                    var $anchor = $t.parent();

	                    if (options.networks.facebook.loadWidget) {
	                        this._injectFacebookSdk(options.networks.facebook.appId);

	                        $el.on('click', function () {
	                            if (!window.FB) return console.error('The Facebook JS SDK hasn\'t loaded yet.');
	                            FB.ui({
	                                method: 'feed',
	                                name: options.networks.facebook.title || options.title,
	                                link: options.networks.facebook.url || options.url,
	                                picture: options.networks.facebook.image || options.image,
	                                caption: options.networks.facebook.caption,
	                                description: options.networks.facebook.description || options.description
	                            });
	                        });
	                    } else {
	                        $anchor.attr('href', this._getUrl('https://www.facebook.com/sharer/sharer.php', {
	                            u: options.networks.facebook.url || options.url
	                        }));

	                        this._attachClickHandler($anchor);
	                    }
	                }
	            }
	        }, {
	            key: '_networkTwitter',
	            value: function _networkTwitter($el, options) {
	                if ($t = $el.find('.icon-twitter')) {
	                    var $anchor = $t.parent();
	                    $anchor.attr('href', this._getUrl('https://twitter.com/intent/tweet', {
	                        text: options.networks.twitter.text || options.title,
	                        url: options.url,
	                        hashtags: options.networks.twitter.hashtags,
	                        via: options.networks.twitter.via
	                    }));

	                    this._attachClickHandler($anchor);
	                }
	            }
	        }, {
	            key: '_networkPinterest',
	            value: function _networkPinterest($el, options) {
	                if ($t = $el.find('.icon-pinterest')) {
	                    var $anchor = $t.parent();
	                    $anchor.attr('href', this._getUrl('https://www.pinterest.com/pin/create/button', {
	                        url: options.networks.pinterest.url || options.url,
	                        media: options.image,
	                        description: options.networks.pinterest.description || options.description
	                    }));

	                    this._attachClickHandler($anchor);
	                }
	            }
	        }, {
	            key: '_networkGooglePlus',
	            value: function _networkGooglePlus($el, options) {
	                if ($t = $el.find('.icon-googlePlus')) {
	                    var $anchor = $t.parent();
	                    $anchor.attr('href', this._getUrl('https://plus.google.com/share', {
	                        url: options.networks.googlePlus.url || options.url
	                    }));

	                    this._attachClickHandler($anchor);
	                }
	            }
	        }, {
	            key: '_networkEmail',
	            value: function _networkEmail($el, options) {
	                if ($t = $el.find('.icon-email')) {
	                    var $anchor = $t.parent();
	                    $anchor.attr('href', this._getUrl('mailto:', {
	                        subject: options.networks.email.title || options.title,
	                        body: options.networks.email.description || options.description
	                    }));

	                    this._attachClickHandler($anchor, true);
	                }
	            }
	        }, {
	            key: '_networkWhatsapp',
	            value: function _networkWhatsapp($el, options) {
	                if ($t = $el.find('.icon-whatsapp')) {
	                    var $anchor = $t.parent();
	                    $anchor.attr('href', this._getUrl('whatsapp://send', {
	                        text: options.networks.whatsapp.description || options.title + " " + options.url
	                    }));
	                }
	            }
	        }, {
	            key: '_getUrl',
	            value: function _getUrl(url) {
	                var _this = this;

	                var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	                var qs = (function () {
	                    var results = [];
	                    var _iteratorNormalCompletion4 = true;
	                    var _didIteratorError4 = false;
	                    var _iteratorError4 = undefined;

	                    try {
	                        for (var _iterator4 = Object.keys(params)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                            var k = _step4.value;
	                            var v = params[k];
	                            results.push(k + '=' + _this._encode(v));
	                        }
	                    } catch (err) {
	                        _didIteratorError4 = true;
	                        _iteratorError4 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                                _iterator4.return();
	                            }
	                        } finally {
	                            if (_didIteratorError4) {
	                                throw _iteratorError4;
	                            }
	                        }
	                    }

	                    return results.join('&');
	                })();

	                if (qs) qs = '?' + qs;
	                return url + qs;
	            }
	        }, {
	            key: '_isEncoded',
	            value: function _isEncoded(str) {
	                str = this._toRFC3986();
	                return decodeURIComponent(str) !== str;
	            }
	        }, {
	            key: '_encode',
	            value: function _encode(str) {
	                if (typeof str === 'undefined' || str === null || this._isEncoded(str)) return encodeURIComponent(str);else return this._toRFC3986(str);
	            }
	        }, {
	            key: '_isMobile',
	            value: function _isMobile() {
	                if (navigator.userAgent.match(/Android|iPhone|PhantomJS/i) && !navigator.userAgent.match(/iPod|iPad/i)) return true;
	                return false;
	            }
	        }, {
	            key: '_injectFacebookSdk',
	            value: function _injectFacebookSdk(appId) {
	                if (!window.FB && appId && $('body').find('#fb-root').length == 0) {
	                    var el = $('body');
	                    var script = document.createElement('script');
	                    script.text = 'window.fbAsyncInit=function(){FB.init({appId:\'' + appId + '\',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if (e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src=\'//connect.facebook.net/en_US/all.js\';i.parentNode.insertBefore(r,i)})(document,\'script\',\'facebook-jssdk\');';
	                    var fbRoot = document.createElement('div');
	                    fbRoot.id = 'fb-root';
	                    el.append(fbRoot);
	                    el.append(script);
	                    console.log('FB Sdk Loaded');
	                }
	            }
	        }, {
	            key: '_toRFC3986',
	            value: function _toRFC3986(str) {
	                var tmp = encodeURIComponent(str);
	                tmp.replace(/[!'()*]/g, function (c) {
	                    return '%' + c.charCodeAt(0).toString(16);
	                });
	            }
	        }]);

	        return SocialShareService;
	    })();

	    exports.default = SocialShareService;
	    SocialShareService.$inject = ['$document', '$window'];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
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