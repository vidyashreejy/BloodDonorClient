angular.module('BloodDonor.Controllers')

.controller('HomeCtrl', function($scope) {
 $scope.menuItems = [
    { title: 'Request for Blood', path: '#/app/RequestBlood' },
    { title: 'Become a donor', path: '#/app/becomeDonor' }
  ];
});