angular.module('BloodDonor.Controllers')

.controller('WelcomeCtrl', function($scope) {
 $scope.menuItems = [
    { title: 'Request for Blood', path: '#/app/requestBlood' },
    { title: 'Become a donor', path: '#/app/becomeDonor' }
  ];
});