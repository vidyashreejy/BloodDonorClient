angular.module('BloodDonor.Controllers')

.controller('RequestBloodCtrl', function($scope) {
// $scope.cities = [
//    { id:1, name: 'Bangalore' },
//    { id:2, name: 'Mangalore' },
//    { id:3, name: 'Mysore' },
//    { id:4, name: 'Hubli' },
//    { id:5, name: 'Dharwad' },
//    { id:6, name: 'Davanagere' },
//    { id:7, name: 'Harihar' }
//  ];
   $http.defaults.headers.put={
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
   };
   
    $http.defaults.useXDomain = true;
    
    $scope.cities = $http.get('http://localhost:3000/api/bloodDonorServerApi/cities/get')
        .success(function(status) {
        console.log('Successfuly retrived data,status = ' + status);
        })
        .error(function(status) {
         console.log('Failure,unable to retrived data,status = ' + status);
        
        });
});
