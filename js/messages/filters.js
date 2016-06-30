ttApp
    .filter('dateAndTime', function () {
        return function (input) {
            let arr = input.split(' ');
            let dateAndTime = '';
            for (let i = 1; i < 5; i++) {
                dateAndTime += " " + arr[i];
            }
            return dateAndTime;

        }
    })

    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    });