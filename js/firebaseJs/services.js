ttApp.service('firebaseService', [  '$firebaseObject', function ( $firebaseObject) {
    const USERS_URL="my-users-r-key",
        MESSAGES_URL="blazing-fire-1631";
    return {
        loadFirebaseMessages: loadFirebaseMessages,
        loadFirebaseUsers:loadFirebaseUsers,
        getObj:getObj,
        saveFirebaseMessages:saveFirebaseMessages,
        saveFirebaseUsers:saveFirebaseUsers
    };

    function loadFirebaseMessages() {
            return getObj(MESSAGES_URL).$loaded();
    }

    function loadFirebaseUsers(){
        return getObj(USERS_URL).$loaded();
    }
            
function getObj(str) {
    let ref=new Firebase("https://"+str+".firebaseio.com/"),
        obj = $firebaseObject(ref);
    // console.log("https://"+str+".firebaseio.com/");
    return obj;
}

function saveFirebaseUsers(users) {
    let obj=getObj(USERS_URL);
    obj.$save().then(function () {
        obj.users = users;
        obj.$save().then(function (ref) {
            ref.key() === obj.$id; // true
        }, function (error) {
            console.log("Error:", error);
        });
    })
}
    function saveFirebaseMessages(messages) {
        let obj=getObj(MESSAGES_URL);
        obj.$save().then(function () {
            obj.messages = messages;
            obj.$save().then(function (ref) {
                ref.key() === obj.$id; // true
            }, function (error) {
                console.log("Error:", error);
            });
        })
    }
    // function tmpObj() {
    //     var deferred = $q.defer();
    //     var obj = $firebaseObject(new Firebase("https://blazing-fire-1631.firebaseio.com/"));
    //     deferred.resolve(obj);
    //     return deferred.promise;
    // }
    //
    // function tmp(fn) {
    //     var deferred = $q.defer();
    //     deferred.resolve(fn);
    //     return deferred.promise;
    // }
    //
    // function loadFirebase(str) {
    //     var deferred = $q.defer();
    //     // var obj = $firebaseObject(new Firebase("https://blazing-fire-1631.firebaseio.com/"));
    //     tmpObj()
    //         .then(function (obj) {
    //             return obj.$loaded();
    //             })
    //         .then(function (obj) {
    //             angular.forEach(obj, function (value, key) {
    //             if (key === str) {
    //                 deferred.resolve(value);
    //             }});
    //         })
    //     deferred.promise;
    // }



}]);