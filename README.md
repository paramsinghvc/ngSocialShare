# ngSocialShare
ngSocialShare is an angular plug and play Social Share Directive that supports configuring the various social networks on which you want to share data from your angular apps

#### Demo 

![Alt text](https://raw.githubusercontent.com/paramsinghvc/ngSocialShare/master/example/images/Share.gif "Social Share")

#### Usage 
1. Plug the ngSocialShare Module into your app module.
```javascript
  angular.module('yourAppModuleName' , ['ngSocialShare']);
```
2. In your markup, include the social-share directive like this.
```html
  <div ng-controller="myController as vm">
    <social-share options="vm.shareOptions"></social-share>
  </div>  
```
3. In your myController, specify a shareOptions object on vm as
```javascript
  this.shareOptions = {
    enabledNetworks: ['twitter', 'pinterest', 'googlePlus', 'email'],
    title: 'Eminem',
    description: 'Guts over Fear',
    url: 'http://google.com',
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
        hashtags: 'Coldplay, Paradise',
        via: '',
        related: ''
      },
      pinterest: {
        description: ''
      },
      googlePlus: {
        url : ''
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
```

Note : If you wanna use the FB Share Dialog Implementation, you need to set the loadWidget option to true and set the Facebook appId.
