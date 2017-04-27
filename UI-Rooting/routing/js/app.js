angular.module("trainingcenter", ['ui.router']) //set module
angular.module("trainingcenter").config(function($stateProvider) {

    $stateProvider.state('coursesstate', {
        url: "/courses-list",
        templateUrl: "templates/courses.html",
        controller: "coursesController"
    });
    $stateProvider.state('studentstate', {
        url: "/student-registraion",
        templateUrl: "templates/student.html",
        controller: "studentController"
    });
    $stateProvider.state('coursesstate', {
        url: "/all-courses",
        templateUrl: "templates/courses.html",
        controller: "coursesController"
    });
    $stateProvider.state('contactstate', {
        url: "/contactlink",
        templateUrl: "templates/contact.html",
        controller: "contactController"
    });

});