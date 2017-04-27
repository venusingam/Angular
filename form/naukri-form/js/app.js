angular.module("uma", ['ui.router']) //set module
angular.module("uma").config(function($stateProvider) {

    $stateProvider.state('formstate', {
        url: "/formlink",
        templateUrl: "templates/form.html",
        controller: "formController"
    });
});