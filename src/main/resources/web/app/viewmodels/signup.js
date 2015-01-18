define(function (require,router) {
    ko = require('knockout');

    var activate = function () {
        router.map([
            { route: 'home', title:'Home', moduleId: 'viewmodels/home', nav: true }

        ]).buildNavigationModel();

        return router.activate();
    }

    var login = (function () {

        var self = this;

        self.username = ko.observable();
        self.password = ko.observable();

        self.signup = function () {
            console.log("signing up " + self.username());
            // alert( "signing up "+self.userName() );
            authClient.createUser(self.username(), self.userpassword(), function (error, user) {
                if (!error) {
                    console.log("Signed up " + self.userName());
                    console.log('Firebase User Id: ' + user.id + ', and Email: ' + user.email);
                    alert(user.email + " has successfully signed up. Please login.");
                }
                else {
                    alert(error.message + " Please login. Thank you.");
                }
            });
        }
        return login;
    })
})