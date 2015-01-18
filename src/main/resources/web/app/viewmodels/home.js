define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        login: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            router.navigate('login');
//            app.showMessage('Search not yet implemented...');
        },
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'login', title:'Login', moduleId: 'viewmodels/login', nav: false }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});