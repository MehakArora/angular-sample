function addController($scope, authStorageAccess, $state) {
    
    $scope.save = function() {
        // Saves into local storage	
        if ($scope.roomForm.$valid) {
            /*
             * Angular Form Validation
             * $scope.roomForm.$valid is a native way of angular form validation.
             * you will have to name the form and in each of the inputs, set the conditions.
             * I've specified some inputs to be 'required' so unless they are filled, saving won't happen.    
             * for more info read https://www.w3schools.com/angular/angular_validation.asp
             */

            var newRoom = {};
            
            newRoom.roomName = $scope.roomName;
            newRoom.ownedBy = $scope.ownedBy;
            newRoom.note = $scope.note;

            if (authStorageAccess.getData("allrooms")) {
                var allRooms = authStorageAccess.getData("allrooms");
            } else {
                allRooms = [];
            }

            newRoom.roomId = $scope.roomName.toLowerCase().replace(/([^a-z])/g,'');
            /*
             * replace and the content after that are things of importance, but not angular.
             * here all what I did is to remove everything that's not between a-z, including spaces.
             * so Viggi's Room!!! becomes viggisroom.
             * take a look at javascript search, replace and regexp if you're interested.
             */
            
            allRooms.push(newRoom);
            
            authStorageAccess.setData("allrooms", allRooms);

            $scope.close();
        }
    }

    $scope.close = function() {
        
        $scope.roomName = '';
        $scope.ownedBy = '';
        $scope.note = '';
        $state.go("rooms");
    
    }
}
angular.module('mainApp')
    .controller('addController', addController);
