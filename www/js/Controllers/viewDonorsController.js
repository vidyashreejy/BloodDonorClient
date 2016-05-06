(function() {
     var viewDonorsCtrl = function($scope, $http) {
           $http.get('http://localhost:3000/api/bloodDonorServerApi/Donor/get')
           .success(function(donors) {
                console.log('Successfully retrieved Donors');
                console.log(donors);
           }
           .error(function(status) {
                console.log('Error, unable to retrieve Donors');
            }
      });
    
    
                    angular.module('BloodDonor.Controllers').controller('ViewDonorsCtrl', viewDonorsCtrl);
