export default class SocialShareService {
    constructor($document, $window) {
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
                googlePlus: {

                },
                email: {
                    title: '',
                    description: ''
                },
                whatsapp: {
                    description: ''
                }
            }
        }

    }
    _defaultTitle() {
        let content;
        if ((content = (this.$document.find('meta[property="og:title"]').text() ||
                this.$document.find('meta[name="twitter:title"]').text())))
            return content.getAttribute('content');
        else if ((content = this.$document.find('title').text()))
            return content.textContent || content.innerText;
    }

    _defaultImage() {
        let content;
        if ((content = (this.$document.find('meta[property="og:image"]').text() ||
                this.$document.find('meta[name="twitter:image"]').text())))
            return content.getAttribute('content');
    }

    _defaultDescription() {
        let content;
        if ((content = (this.$document.find('meta[property="og:description"]').text() ||
                this.$document.find('meta[name="twitter:description"]').text() ||
                this.$document.find('meta[name="description"]').text())))
            return content.getAttribute('content');
        else
            return '';
    }
    mergeOptions(userOpts) {
        return angular.extend(angular.copy(this.options), userOpts);
    }

    fCap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    _openWindowPopup(uri, isEmail = false) {
        let popup = {
            width: 500,
            height: 350
        };

        popup.top = (screen.height / 2) - (popup.height / 2);
        popup.left = (screen.width / 2) - (popup.width / 2);

        if (isEmail) {
            return window.open(uri, '_blank');
        }

        window.open(
            uri,
            'targetWindow', `
            toolbar=no,
            location=no,
            status=no,
            menubar=no,
            scrollbars=yes,
            resizable=yes,
            left=${popup.left},
            top=${popup.top},
            width=${popup.width},
            height=${popup.height}`
        );

        if (window.focus) {
            try {
                targetWindow.focus()
            } catch (e) {
                alert('Yikes! Looks like popups are disabled on your browser. Please enable them for this website for seamless experience :)');
            }
        }
    }

    _attachClickHandler($el, isEmail) {
        let self = this;
        $el.on('click', function(e) {
            e.preventDefault();
            self._openWindowPopup(this.href, isEmail);
        })
    }

    _populateNetworksHolder($el, en) {
        let networks = [];

        for (let n of en) {
            if (this.en.indexOf(n) > -1)
                networks.push(n);
        }

        for (let n of networks) {
            $el.find('ul').append(`<a class="networkItem"><span class="icon-${n}"></span></a>`)
        }

        return networks;
    }

    run($el, options) {
        let networks = this._populateNetworksHolder($el, this.options.enabledNetworks);
        for (let network of networks) {
            this[`_network${this.fCap(network)}`] ? this[`_network${this.fCap(network)}`]($el, options) : angular.noop();
        }
    }

    _networkFacebook($el, options) {


        if ($t = $el.find('.icon-facebook')) {
            let $anchor = $t.parent();

            if (options.networks.facebook.loadWidget) {
                this._injectFacebookSdk(options.networks.facebook.appId);

                $el.on('click', function() {
                    if (!window.FB)
                        return console.error('The Facebook JS SDK hasn\'t loaded yet.');

                    FB.ui({
                        method: 'feed',
                        name: options.networks.facebook.title || options.title,
                        link: options.networks.facebook.url || options.url,
                        picture: options.networks.facebook.image || options.image,
                        caption: options.networks.facebook.caption,
                        description: options.networks.facebook.description || options.description
                    })
                })

            } else {

                $anchor.attr('href', this._getUrl('https://www.facebook.com/sharer/sharer.php', {
                    u: options.networks.facebook.url || options.url
                }));

                this._attachClickHandler($anchor);
            }

        }

    }

    _networkTwitter($el, options) {
        if ($t = $el.find('.icon-twitter')) {
            let $anchor = $t.parent();
            $anchor.attr('href', this._getUrl('https://twitter.com/intent/tweet', {
                text: options.networks.twitter.text || options.title,
                url: options.url,
                hashtags: options.networks.twitter.hashtags,
                via: options.networks.twitter.via
            }))

            this._attachClickHandler($anchor);

        }
    }

    _networkPinterest($el, options) {
        if ($t = $el.find('.icon-pinterest')) {
            let $anchor = $t.parent();
            $anchor.attr('href', this._getUrl('https://www.pinterest.com/pin/create/button', {
                url: options.networks.pinterest.url || options.url,
                media: options.image,
                description: options.networks.pinterest.description || options.description
            }))

            this._attachClickHandler($anchor);

        }
    }

    _networkGooglePlus($el, options) {
        if ($t = $el.find('.icon-googlePlus')) {
            let $anchor = $t.parent();
            $anchor.attr('href', this._getUrl('https://plus.google.com/share', {
                url: options.networks.googlePlus.url || options.url
            }))

            this._attachClickHandler($anchor);

        }

    }

    _networkEmail($el, options) {
        if ($t = $el.find('.icon-email')) {
            let $anchor = $t.parent();
            $anchor.attr('href', this._getUrl('mailto:', {
                subject: options.networks.email.title || options.title,
                body: options.networks.email.description || options.description
            }))

            this._attachClickHandler($anchor, true);

        }
    }

    _networkWhatsapp($el, options) {

        if ($t = $el.find('.icon-whatsapp')) {
            let $anchor = $t.parent();
            $anchor.attr('href', this._getUrl('whatsapp://send', {
                text: options.networks.whatsapp.description || options.title + " " + options.url
            }))

            // this._attachClickHandler($anchor);

        }
    }

    _getUrl(url, params = {}) {
        let qs = (() => {
            let results = [];
            for (let k of Object.keys(params)) {
                let v = params[k];
                results.push(`${k}=${this._encode(v)}`);
            }
            return results.join('&');
        })();

        if (qs) qs = `?${qs}`;

        return url + qs;
    }

    _isEncoded(str) {
        str = this._toRFC3986();
        return decodeURIComponent(str) !== str;
    }


    _encode(str) {
        if (typeof str === 'undefined' || str === null || this._isEncoded(str))
            return encodeURIComponent(str);
        else
            return this._toRFC3986(str);
    }
    _isMobile() {
        if (navigator.userAgent.match(/Android|iPhone|PhantomJS/i) &&
            !navigator.userAgent.match(/iPod|iPad/i))
            return true;
        return false;
    }

    _injectFacebookSdk(appId) {

        if (!window.FB && appId && ($('body').find('#fb-root').length == 0)) {
            let el = $('body');
            let script = document.createElement('script');
            script.text = `window.fbAsyncInit=function(){FB.init({appId:'${appId}',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if (e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='//connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk');`;

            let fbRoot = document.createElement('div');
            fbRoot.id = 'fb-root';

            el.append(fbRoot);
            el.append(script);
            console.log('FB Sdk Loaded');
        }
    }

    _toRFC3986(str) {
        let tmp = encodeURIComponent(str);
        tmp.replace(/[!'()*]/g, function(c) {
            return `%${c.charCodeAt(0).toString(16)}`;
        });
    }
}

SocialShareService.$inject = ['$document', '$window'];
