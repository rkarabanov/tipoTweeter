'use strict';

controllers
    .controller('UserCtrl', ['$scope', 'userService',  'firebaseService', '$routeParams','messageService','registService',
        function ($scope, userService,  firebaseService, routeParams, messageService,registService ) {
            // var ref = new Firebase("https://blazing-fire-1631.firebaseio.com/");

            //         // userService.getUrl(name,$scope.mes[0]);
            //     }
            // };
            // $scope.tweeters.$loaded()
            //     .then(function (x){
            //         x===$scope.tweeters;
            //     });
            // $scope.messages = $firebaseObject(ref);
            // $scope.mes=[];
            // $scope.messages.$loaded().then(function() {
            //     //console.log("loaded record:", $scope.messages.$id);
            //
            //     // To iterate the key/value pairs of the object, use angular.forEach()
            //     let i=0;
            //     angular.forEach($scope.messages, function(value, key) {
            //         $scope.mes[i]=value;
            //         i++;
            //        // console.log($scope.mes[i]);
            //     });
            // });

            // $scope.obj = $firebaseObject(ref);
            // firebaseService.tmp().then( function (data) {
            //     console.log(data);
            //
            // });

            // firebaseService.loadFirebase("messages")
            //     .then(function (data) {
            //         console.log(data);
            //     })

            /*firebaseService.tmp().then(function (res) {
             $scope.messages = res;
             console.log(res);
             });*/

            // firebaseService.tmp(firebaseService.loadFirebase("users")).then(function (res) {
            //     $scope.users=res;
            //     //console.log(res);
            // });
            // $scope.messages= firebaseService.loadMessagesFirebase();
            // // $scope.messages;
            // $scope.users=   firebaseService.loadUsersFirebase();
            // console.log($scope.users);
            // var obj=$firebaseObject(new Firebase("https://blazing-fire-1631.firebaseio.com/"));
            $scope.userInSystem = null;
            $scope.profileOfUser=null;
            // if($scope.userInSystem){
            //
            // }
            firebaseService.loadFirebaseUsers().then(function (obj) {
                angular.forEach(obj, function (value, key) {
                        $scope.users = value;
                    }
                );
                // firebaseService.saveFirebase($scope.messages, $scope.users);
            });
            $scope.saveFirebaseUsers = function () {
                firebaseService.saveFirebaseUsers($scope.users);
            };
            $scope.getUser = function () {
                let password = document.getElementById("password").value,
                    login = document.getElementById("login").value,
                    el = document.getElementsByClassName("btn-login")[0],
                    flag = false;
                for (let one of $scope.users) {
                    if (login === one.loginUser && password === one.password) {
                        $scope.userInSystem = one;
                        flag = true;
                        document.location.href = "#/";
                        break;
                    }
                }
                if (!flag) {
                    window.alert("Неверен пароль или ненайден пользователь с таким логином");
                }

            };
            $scope.exitUser = function () {
                $scope.userInSystem = null;
            };
            //$scope.saveFirebase();
            $scope.getURL = function (name) {
               return userService.getUser($scope.users,name).avatarUser;
            };
            $scope.getWhatLiked = function (id, whoLiked) {
                if ($scope.userInSystem !== null) {
                    for (let i = 0; i < $scope.users.length; i++) {
                        if ($scope.userInSystem.loginUser === $scope.users[i].loginUser) {
                            if (messageService.isLike($scope.userInSystem.loginUser, whoLiked)) {
                                if (!$scope.users[i].whatLikedId) {
                                    $scope.users[i].whatLikedId = [];
                                }
                                $scope.users[i].whatLikedId.unshift(id);
                            }
                            else {
                                if ($scope.users[i].whatLikedId.length === 1) {
                                    $scope.users[i].whatLikedId = false;
                                }
                                else {
                                    for (let j = 0; j < $scope.users[i].whatLikedId.length; j++) {
                                        if ($scope.users[i].whatLikedId[j] === id) {
                                            $scope.users[i].whatLikedId.splice(j, 1);
                                            break;
                                        }
                                    }
                                }
                            }
                            firebaseService.saveFirebaseUsers($scope.users);
                            break;
                        }
                    }
                }
            };
            $scope.isRegister=function () {
                $scope.regist(registService.isRegister($scope.users))
            };
            $scope.regist=function (user) {
                if(user){
                $scope.users.push(user);
                firebaseService.saveFirebaseUsers($scope.users);
                $scope.userInSystem=$scope.users[$scope.users.length-1];
                document.location.href = "#/";}
            };

            $scope.inProfile=function (name) {
                $scope.profileOfUser=userService.getUser($scope.users,name);
            };

            // $http.get('json/messages.json').success(function (data) {
            //     obj.messages = data.reverse();
            //     obj.$save().then(function(ref) {
            //         ref.key() === obj.$id; // true
            //     }, function(error) {
            //         console.log("Error:", error);
            //     });
            // });
            // $http.get('json/users.json').success(function (data) {
            //     obj.users = data;
            //     obj.$save().then(function(ref) {
            //         ref.key() === obj.$id; // true
            //     }, function(error) {
            //         console.log("Error:", error);
            //     });
            // });

            //console.log($scope.mes[0]);
            // $scope.mes.sort(function (a, b) {
            //     return a.dateAndTime>b.dateAndTime;
            // });
            // $scope.messages.$loaded(function () {
            //        // userService.getUsers().success(function (data) {
            //        //     let y=data.sort(function (a, b) {
            //        //         return a.dataTTMessege>b.dataTTMessege;
            //        //     });
            //        $scope.messages.$add(data);
            //                // ref.key() === item.$id; // true
            // // });
            //        });
            // console.log($scope.messages);
            // list.$loaded(function () {
            //     var item = list[1];
            //     list.$remove(item).then(function(ref) {
            //         ref.key() === item.$id; // true
            //     });
            // });
            // .then(function(x) {
            //     // x === list; // true
            // })
            // .catch(function(error) {
            //     console.log("Error:", error);
            // });
            // console.log(list);

            // userService.getUsers().success(function (data) {
            //     $scope.users = data;
            //     list[0]=data;
            //     list.$save(0).then(function(ref) {
            //         ref.key() === list[0].$id; // true
            //     });
            //   //  list.$add($scope.users).then(function(ref) {
            //     //    var id = ref.key();
            //     //    console.log("added record with id " + id);
            //     //    list.$indexFor(id); // returns location in the array
            //    // });
            //     $scope.messages=userService.getMessages($scope.users);
            //     console.log(list);
            // });


        }
    ])


;