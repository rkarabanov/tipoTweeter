'use strict';
ttApp.service('userService', ['$http', '$routeParams', function ($http, $routeParams) {
    return {
        // getUsers: getUsers,
        getUrl: getUrl,
        getMessages: getMessages,
        getUser:getUser
    };

    function getUser(users,name) {
        for (let one of users) {
            if (one.loginUser === name) {
                // console.log(one.avatarUser);
                return one;
            }
        }
    }

    function getMessages(list) {
        let u = 0,
            messeges = [],
            buf;

        while (true) {
            buf = null;
            for (let i = 0; i < list.length; i++) {
                if ((buf === null && list[i].messages[0]) || (list[i].messages[0] && list[buf].messages[0].dataTTMessege < list[i].messages[0].dataTTMessege)) {
                    buf = i;
                }
            }
            if (buf === null) {
                break;
            }
            messeges.push(list[buf].messages.shift());
            messeges[u].loginUser = list[buf].loginUser;
            u++;
        }
        return messeges;
    }

    // function getUsers(str) {
    //     return $http.get('json/' + str + '.json');
    // }

    function getUrl(name, list) {
        for (let i = 0; i < list.length; i++) {
            if (list.loginUser === name) {
                return list.avatarUser;
            }
        }
    }
}
]);