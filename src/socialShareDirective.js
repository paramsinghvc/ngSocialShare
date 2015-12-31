export default class SocialShareDirective {

    constructor($timeout, SocialShareService, $compile) {

        this.restrict = 'E';
        this.$timeout = $timeout;
        this.$compile = $compile;
        this.SocialShareService = SocialShareService;
        this.replace = true;
        this.template = `<div>
						    <button class="shareButton"><span class="icon-share"></span></button>
						    <div class="networksHolder">
						    	<ul class="networksList">
						    	</ul>
						    </div>
						</div>`;
        this.scope = {
            options: '='
        }
    }

    compile($el) {

        let $networksHolder = $el.find('.networksHolder');
        this.$timeout(() => {
            $el.on('click', function() {
                $networksHolder.fadeToggle();
            });
        })


        return ($scope, $el, $attrs) => {

            $scope.$watch(() => $scope.options, (n, o) => {
                if (!n) return;

                let options = this.SocialShareService.mergeOptions($scope.options);
                this.$timeout(() => {
                    this.SocialShareService.run($networksHolder, options);
                    this.$compile($el)($scope)
                });

            })


        }
    }

    static directiveFactory($timeout, SocialShareService, $compile) {
        SocialShareDirective.instance = new SocialShareDirective($timeout, SocialShareService, $compile);
        return SocialShareDirective.instance;
    }
}

SocialShareDirective.$inject = ['$timeout', 'SocialShareService', '$compile'];
