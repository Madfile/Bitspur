(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'wizard') {
                        el.tkWizard();
                    }
                }
            };
        } ]);

})();