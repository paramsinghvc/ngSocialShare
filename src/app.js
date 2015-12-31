import SocialShareDirective from './socialShareDirective';
import SocialShareService from './socialShareService';

angular.module(['ngSocialShare'], [])
	.service('SocialShareService', SocialShareService)
	.directive('socialShare', SocialShareDirective.directiveFactory)