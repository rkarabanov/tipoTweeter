'use strict';
ttApp.service('registService', [ function () {
    return {
        isRegister:isRegister,
        isOkPassword:isOkPassword,
        registr:registr,
        isOkUsername:isOkUsername,
        isOkConfirm:isOkConfirm
    };
    
    function isRegister(users) {
        let username = document.getElementById('username').value,
            password = document.getElementById('passwordreg').value,
            confirm = document.getElementById('confirm').value,
            url = document.getElementById('url').value,
            labels = $('label'),
            seccessed = 0;

        if (!labels.eq(2).find('span').length) {
            for (let i = 2; i < labels.length - 1; i++) {
                labels.eq(i).append('<span class="glyphicon"></span>')
            }
        } else {
            labels.find("span").removeClass("glyphicon-remove");
            labels.find("span").removeClass("glyphicon-ok");
        }

        if (isOkUsername(username,users)) {
            seccess(2);
        }
        else {
            unseccess(2);
        }

        if (isOkPassword(password)) {
            seccess(3);
        } else {
            unseccess(3)
        }

        if (isOkConfirm(confirm, password)) {
            seccess(4);
        } else {
            unseccess(4);
        }
        url = url || "http://tamgdeya.ru/photos/norm/1/1_JwxXd1Sj.jpg";

        return seccessed === 3? registr(username, password, url):false;
            
        function seccess(i) {
            labels.eq(i).find("span").addClass("glyphicon-ok");
            seccessed++;
        }

        function unseccess(i) {
            labels.eq(i).find("span").addClass("glyphicon-remove");
        }

    }
    function isOkPassword(password) {
        return password.length > 4;
    }

    function isOkConfirm(confirm, password) {
        return isOkPassword(password) && confirm === password;
    }

    function isOkUsername(username,users) {
        if (username === "") {
            return false;
        }
        for (let one of   users) {
            if (one.loginUser === username) {
                return false;
            }
        }
        return true;
    }

    function registr(username, password, url) {
        return {
            avatarUser: url,
            loginUser: username,
            password: password,
            whatLikedId: false,
            whoSubscribe: false,
            whomSubscribe: false
        };
    }
}
]);