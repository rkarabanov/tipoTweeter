'use strict';

controllers

    .controller('MessageCtrl', ['$scope', 'messageService', 'firebaseService',
        // '$firebaseObject','$firebaseArray','$firebaseAuth',
        function ($scope, messageService, firebaseService
                  // ,$firebaseObject,$firebaseArray,$firebaseAuth
        ) {


            //var postsRef = $scope.tweeters.child("tweets");
            // console.log($scope.tweeters);
            firebaseService.loadFirebaseMessages().then(function (obj) {
                angular.forEach(obj, function (value, key) {
                        $scope.messages = value;
                    }
                );
                // firebaseService.saveFirebase($scope.messages, $scope.users);
            });

            $scope.saveFirebaseMessages = function () {
                firebaseService.saveFirebaseMessages($scope.messages);
            };

            $scope.isLike = function (userOfName, whoLiked) {
                return messageService.isLike(userOfName, whoLiked);
            };

            $scope.getLike = function (userOfName, whoLiked, id) {
                if (userOfName !== undefined) {
                    for (let i = 0; i < $scope.messages.length; i++) {
                        if ($scope.messages[i].id === id) {
                            if (!messageService.isLike(userOfName, whoLiked)) {
                                $scope.messages[i].like++;
                                if (!$scope.messages[i].whoLiked) {
                                    $scope.messages[i].whoLiked = [];
                                }
                                $scope.messages[i].whoLiked[$scope.messages[i].whoLiked.length]=userOfName;
                            }
                            else {
                                $scope.messages[i].like--;
                                if ($scope.messages[i].whoLiked.length === 1) {
                                    $scope.messages[i].whoLiked = false;
                                } else {
                                    for (let j = 0; j < $scope.messages[i].whoLiked.length; j++) {
                                        if ($scope.messages[i].whoLiked[j] === userOfName) {
                                            $scope.messages[i].whoLiked.splice(j, 1);
                                            break;
                                        }
                                    }
                                }
                            }
                            firebaseService.saveFirebaseMessages($scope.messages);
                            break;
                        }
                    }
                }
            };
            $scope.sendMessage=function (login) {
               let text= messageService.sendMessage();
                if(text){
                    $scope.messages.unshift(messageService.createMessage(login,$scope.messages[0].id,text));
                    firebaseService.saveFirebaseMessages($scope.messages);
                }
                else{
                    window.alert("Поле ввода пустое");
                }
            };

            $scope.deleteMessage=function (id) {
              $scope.messages=messageService.deleteMessage($scope.messages,id);
                firebaseService.saveFirebaseMessages($scope.messages);
            };

            $scope.isEmpty=function (login) {
                for(let one of $scope.messages){
                    if(one.loginUser===login){
                        return true;
                    }
                }
                return false;
            };
//firebaseArray.$ref().child(5).set(g);
// messageService.getTweeter().success(function (data) {
//     $scope.tweeters = data;
//
//     //$scope.data.save($scope.tweeters);
// });
// var list = $firebaseArray(ref);
// list.$add($scope.tweeters).then(function(ref) {
//     var id = ref.key();
//     console.log("added record with id " + id);
//     list.$indexFor(id); // returns location in the array
// });
// $scope.tweeters.$loaded()
//     .then(function (x){
//         x===$scope.tweeters;
//     }
//
//     ).catch(function(error) {
//     console.log("Error:", error);
// });


//$scope.tweeters = data;
//$scope.tweeters.push(g);
// $scope.tweeters[0][5]=(g);
// $scope.tweeters.$save.then(function(ref) {
//     ref.key() === $scope.tweeters[0].$id;
// });


        }])


;