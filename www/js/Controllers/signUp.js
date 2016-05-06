angular.module('BloodDonor.Controllers')
.controller("signUpCtrl", function ($scope, $http,bloodGroupService) {

    $scope.errMsg = null;
    
    $scope.closeSignUp = function() {
    $scope.modal.hide();
  };
    
    $scope.SendData = function () {
       // use $.param jQuery function to serialize data from JSON 
        var data = $.param({
            Name:        $scope.Name,
            DOB:         $scope.DOB,
            Sex:         $scope.Sex,
            BloodGroup:  $scope.BloodGroup,
            Location:    $scope.Location,
            ContactNo:   $scope.ContactNo     
        });
        $scope.bloodGroup = bloodGroupService.getBloodGroup();
        $http.post('/api/bloodDonorServerApi/Donor/post', data)
        .success(function (data) {
            console.log('Successfully stored Donors information');
            console.log(data);
            
            $scope.errMsg = null;
            
            // Now forward to another URL...
            $location.url('/app/home');
        })
        .error(function (data, status, header, config) {
            $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
            // Set the error message that will be show to the user...
            $scope.errMsg = "Unable to Sign-up, please try again later...";
        });
    };

});


