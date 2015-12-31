export default class IndexController{
	constructor(){

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
}