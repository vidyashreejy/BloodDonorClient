(function() {
    var bloodGroupService = function() {
        var bloodGroup;
        
        this.getBloodGroup = function() {
            return bloodGroup;
        };
        
        this.saveBloodGroup = function(pbloodGroup) {
            bloodGroup = pBloodGroup;
        };
    };
    
    angular.module('BloodDonor').service('bloodGroupService', bloodGroupService);
}());