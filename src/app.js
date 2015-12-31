import SocialShareDirective from './socialShareDirective';
import SocialShareService from './socialShareService';
import IndexController from './indexController';

angular.module(['SocialShare'], [])
	.service('SocialShareService', SocialShareService)
	.directive('socialShare', SocialShareDirective.directiveFactory)
	.controller('indexController', IndexController)