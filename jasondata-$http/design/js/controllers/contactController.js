angular.module("ranjith").controller("contactController", contactControllerModel);

function contactControllerModel($scope, $http) {

    var response = $http.get("data.json");
    response.then(function(result) {
        $scope.cdetails = result.data;
        console.log(result);
    }, function(error) {
        console.log(error);
    });

};
angular.module("ranjith").controller("controller1", function($scope, $http) {
    $scope.abc1 = function() {
        var response = $http.get("data.json");
        // console.log(response);
        response.then(function(result) {
            console.log(result.data);
            $scope.row = result.data;
            //console.log(result);
        }, function(error) {
            console.log(error);
        });
    }
});
angular.module("ranjith").controller("controller2", function($scope, $http) {
    $scope.abc2 = function() {
        var response = $http.get("data.json");
        // console.log(response);
        response.then(function(result) {
            console.log(result.data);
            $scope.agents = result.data;
            // console.log(result);
        }, function(error) {
            console.log(error);
        });
    }
});
angular.module("ranjith").controller("controller3", function($scope, $http) {
    $scope.abc3 = function() {
        var response = $http.get("data.json");
        // console.log(response);
        response.then(function(result) {
            console.log(result.data);
            $scope.agents = result.data;
            // $scope.bdetails = agents[0].billingList;
            // console.log(result);
        }, function(error) {
            console.log(error);
        });
    }
});
angular.module("ranjith").controller("controller4", function($scope, $http) {
    $scope.abc4 = function() {
        var response = $http.get("data.json");
        // console.log(response);
        response.then(function(result) {
            console.log(result.data);
            $scope.agents = result.data;
            // $scope.bdetails = agents[0].billingList;
            // console.log(result);
        }, function(error) {
            console.log(error);
        });
    }
});