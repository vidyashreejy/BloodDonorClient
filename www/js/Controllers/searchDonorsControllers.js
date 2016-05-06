(function() {
    var searchDonorsCtrl = function($scope, $http, $location, DonorsService,bloodGroupService) {
    
        // To handle CORS
        $http.defaults.headers.put = {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
        };
        $http.defaults.useXDomain = true;
    
        // Form data for the Search Donor Model
        $scope.searchDonorData = {};

        // Perform the search operation when the user submits the search form
        $scope.searchDonor = function() {
            console.log('Searching for donors...', $scope.searchDonorData);

            var config = { params: $scope.searchDonorData};
            $http.get('http://localhost:3000/api/bloodDonorServerApi/Donor/get', config)
            .success(function(donors) {
                console.log('Successfully retrieved Donors');
                console.log(donors);
                
                // Save the donors list into the service...
                DonorsService.saveDonors(donors);
                
                // Now forward to another URL...
                $location.url('/app/DisplayDonors');
            })
            .error(function(status) {
                  console.log('Error, unable to retrieve Donors');
            });
        };

        // Get Blood Types from Server...
        $scope.BloodGroups = [];
        $http.get('http://localhost:3000/api/bloodDonorServerApi/BloodGroup/get')
            .success(function(bloodGroups) {
                console.log('Successfuly retrived Blood Groups');
                $scope.BloodGroups = bloodGroups;
                bloodGroupService.saveBloodGroup(BloodGroups)
            })
            .error(function(status) {
                console.log('Failure,unable to retrived data,status = ' + status);
            });

        // Get Cities from Server...
        $http.get('http://localhost:3000/api/bloodDonorServerApi/cities/get')
            .success(function(cities) {
                console.log('Successfuly retrived list of Cities');
                $scope.Cities = cities; 
            })
            .error(function(status) {
                console.log('Failure,unable to retrived data,status = ' + status);
            });
    };
    
    // Tell the Dependency Injection module, about the parameters to pass to the constructor...
    searchDonorsCtrl.$inject = ['$scope', '$http', '$location', 'DonorsService']
    
    angular.module('BloodDonor.Controllers').controller('SearchDonorsCtrl', searchDonorsCtrl);

}());