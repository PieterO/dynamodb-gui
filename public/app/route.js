var app = angular.module('main', [
    // Angular modules
    'ngAnimate', // animations
    'ngRoute', // routing
    'ngSanitize',

]);

app.run(['$q', '$rootScope',
    function($q, $rootScope) {

    }
]);

// Collect the routes
app.constant('myroutes', getRoutes());
// Configure the routes and route resolvers
app.config(['$routeProvider', 'myroutes', routeConfigurator]);

function routeConfigurator($routeProvider, routes) {

    routes.forEach(function(r) {
        $routeProvider.when(r.url, r.config);
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}

function getRoutes() {
    return [{
        url: '/',
        config: {
            title: 'Home',
            templateUrl: '/app/pages/home/home.html'
        }
    }, {
        url: '/home',
        config: {
            title: 'Home',
            templateUrl: '/app/pages/home/home.html'
        }
    }, {
        url: '/read',
        config: {
            title: 'Read',
            templateUrl: '/app/pages/read/read.html'
        }
    }, {
        url: '/tables',
        config: {
            title: 'Tables',
            templateUrl: '/app/pages/tables/tables.html'
        }
    }];
}