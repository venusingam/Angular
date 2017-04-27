angular.module("uma").controller("formController", formControllerModel);

function formControllerModel($scope, $log) {
    $scope.createAccount = function() {
        var username = $scope.username;
        var email = $scope.email;
        var createpassword = $scope.createpassword;
        var mobileno = $scope.mobileno;
        var address = $scope.address;
        var male = $scope.male;
        var female = $scope.female;
        $log.log(username);
        $log.log(email);
        $log.log(createpassword);
        $log.log(mobileno);
        $log.log(address);
        $log.log(male);
        $log.log(female);
    }
}