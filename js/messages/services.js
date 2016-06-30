'use strict';
ttApp.service('tweeterService', ['$http', '$routeParams', function ($http, $routeParams) {
    return {
        getTweeter: getTweeter
    };

    function getTweeter() {
        return $http.get('json/messages.json');
    }

}
]);