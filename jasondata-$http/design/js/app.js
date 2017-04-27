angular.module("ranjith", ['ui.router']) //set module
angular.module("ranjith").config(function($stateProvider) {


    $stateProvider.state('contactstate', {
        url: "/contactlink",
        templateUrl: "templates/contact.html",
        controller: "contactController"
    });

});