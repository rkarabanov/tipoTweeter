'use strict';

controllers

    .controller('TweeterCtrl', ['$scope','tweeterService','userCtrl',
        // '$firebaseObject','$firebaseArray','$firebaseAuth',
        function ($scope,tweeterService,userCtrl
            // ,$firebaseObject,$firebaseArray,$firebaseAuth
        ) {

           
            //var postsRef = $scope.tweeters.child("tweets");
           // console.log($scope.tweeters);
          
            //firebaseArray.$ref().child(5).set(g);
            tweeterService.getTweeter().success(function (data) {
                $scope.tweeters = data;
            
                //$scope.data.save($scope.tweeters);
            });
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