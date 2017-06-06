function roomsController($scope, authStorageAccess, $rootScope, $state) {
    /*
     * loadRooms just loads the contents from your local storage and makes it available in the view
     */
    $scope.loadRooms = function() {
        $scope.rooms = authStorageAccess.getData("allrooms");
    }
    $scope.loadRooms();
    
    /*
     * Adding a new room is a new state, and since it was a child of rooms state it was not reloding the new list after
     * addition. so I manually reloaded the contents on state change
     *
     * In fact, $rootScope.$on() can be used for authentication from the front end, as you can prevent accessing any other
     * state if the user is not logged in! There are a lot more uses for $rootScope.
     */
    $rootScope.$on('$stateChangeSuccess', function() {
        if ($state.current.name == "rooms")
            $scope.loadRooms();
    });
}
angular.module('mainApp')
    .controller('roomsController', roomsController);
