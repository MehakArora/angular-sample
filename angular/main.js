angular.module('mainApp', ['ui.router'])
    // our app will be called as mainApp
    // ['ui.router'] will inject ui router so that we can use it in app.
    

    // configuring the states
    /*
     * .state('statename',{
     *          url:"url-you-wanna-see-in-the-browser/:param where parameter is specified in browser",
                templateUrl : "The path to the .html file which is associated with the state",
                controller : "The name of the controller you wanna use",
                data : "doesn't play a role here but just for letting you know of this, thus increasing the probability 
                        of you googling this up and finding something cool"
     * })
     */
    .config(function($stateProvider, $urlRouterProvider) {
        
        // If any route other than the one's specified below is typed by user, he will be redirected to /rooms
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'partials/home.html'
                // it is not compulsory to have a controller
            })
            .state('page',{
                url:'/page',
                templateUrl:'partials/page.html'
            })
            .state('rooms', {
                url: '/rooms',
                templateUrl: 'partials/rooms.html',
                controller: 'roomsController',
            })
            .state('rooms.add', {
                url: '/add',
                templateUrl: 'partials/add.html',
                controller: 'addController'
            })
            .state('room', {
                url: '/room/:id',
                templateUrl: 'partials/room.html',
                controller: 'roomController'
            })
            .state('readme',{
            	url:'/readme',
            	templateUrl : 'partials/readmecontent.html'
            });
    });
