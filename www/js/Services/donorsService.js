(function() {
    var donorsService = function() {
        var donors;
        
        this.getDonors = function() {
            return donors;
        };
        
        this.saveDonors = function(pDonors) {
            donors = pDonors;
        };
    };
    
    angular.module('BloodDonor').service('DonorsService', donorsService);
}());