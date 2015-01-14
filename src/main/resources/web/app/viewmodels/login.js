define(function (require) {
    ko = require('knockout');

    var login = (function() {

        var self = this;

        self.username = ko.observable();
        self.password = ko.observable();

        self.signup = function() {
            console.log( "signing up "+self.username() );
            // alert( "signing up "+self.userName() );
        }
    });
    ko.applyBindings(new login())

    return login;
});