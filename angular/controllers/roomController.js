function roomController($scope, authStorageAccess, arrayHandler, $stateParams, $state) {
    /*
     * A note on arrayHandler
     * rooms is an array of objects, and findByMatch searches for roomId == $stateParams.id for each object
     * in that array, returns the matching index. 
     */
    var todoId = "todo_" + $stateParams.id,    
        rooms = [];

    $scope.roomEditing = false;
    
    $scope.loadRoom = function() {

        rooms = authStorageAccess.getData("allrooms");

        $scope.room = null;
        
        if(rooms){
            var index = arrayHandler.findByMatch(rooms,'roomId',$stateParams.id);
            $scope.room = rooms[index];
        }
        // If the room is not present, or user manually typed something, just redirect to rooms
        if(!$scope.room)
            $state.go("rooms");
    }

    $scope.editRoom = function(){
    
        $scope.roomEditing = true;
    
    }
    
    $scope.deleteRoom = function(){
    
        arrayHandler.deleteByMatch(rooms,'roomId',$stateParams.id);
        
        authStorageAccess.setData("allrooms",rooms);// saving back to local storage

        $state.go("rooms");
    
    }

    $scope.saveRoom = function(){
        
        if($scope.roomForm.$valid){
            // validation, read comment on addController.js
            var index = arrayHandler.findByMatch(rooms,'roomId',$stateParams.id);
            rooms[index] = $scope.room;
            $scope.roomEditing =false;
            authStorageAccess.setData("allrooms",rooms);
        }
    }
 // Initializing
    $scope.loadRoom();
}

angular.module('mainApp')
    .controller('roomController', roomController);
