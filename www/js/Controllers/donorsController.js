(function() {

    // Create the displayDonorsCtrl...
    var displayDonorsCtrl = function($scope, $http, DonorsService) {
        // Get the donors list from the service...
        $scope.donors = DonorsService.getDonors();
        
        console.log('Using Donors provided by service');
        console.log($scope.donors);
    };
    
    // Tell the Dependency Injection module, about the parameters to pass to the constructor...
    displayDonorsCtrl.$inject = ['$scope', '$http', 'DonorsService']

    // Register the displayDonorsCtrl as a controller with AngularJS
    angular.module('BloodDonor.Controllers').controller('DisplayDonorsCtrl', displayDonorsCtrl);

}());