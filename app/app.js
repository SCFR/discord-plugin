require("script!../vendor/angular.min.js");
require("script!../vendor/angular-cookies.min.js");

app = angular.module('scfr', []);

app.service('scfrAPI', require("exports?service!./service/API.js"));

app.controller('modal-loggin', require("exports?controller!./controller/modal-loggin.js"));

app.directive("scfrPopOutUser", require("exports?directive!./directive/pop-out-user.js"));
app.directive("scfrUserScfrStatus", require("exports?directive!./directive/user-scfr-status.js"));
app.directive("scfrModalBackground", require("exports?directive!./directive/modal-background.js"));
app.directive("scfrModalLoggin", require("exports?directive!./directive/modal-loggin.js"));


app.controller('scfr_main', ['$scope', '$compile', 'scfrAPI', function($scope, $compile, scfrAPI) {
  console.log("loaded controller");
  var modal_parent = $("[ng-controller='scfr_main'] > div > span:not(.incoming-calls)");

  $scope.api = scfrAPI;

  $scope.$watch("api", function(val) {
    console.log(val);
  });

  $scope.addDirective = function(args) {
    var newElement = $compile( args.directive )( $scope );
    args.elem.append( newElement );

    console.log(args);
  }

  $scope.popOutLoggin = function() {
    console.log("clicked!");
    $scope.addDirective({elem: modal_parent, directive:"<scfr-modal-loggin></scfr-modal-loggin>"});
  }

  $scope.quitModal = function() {
    modal_parent.html("");
  }


}]);


angular.element(document).ready(function() {
  console.log("angular ok");
  angular.bootstrap(document, ['scfr']);
});





exports.app = app;
