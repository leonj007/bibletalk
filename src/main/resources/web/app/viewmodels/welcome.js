﻿define(function() {
    var ctor = function () {
        this.displayName = 'Welcome to BibleTalk';
        this.description = 'BibleTalk is an application designed to help Christians share the word of God';
        this.features = [
            'Chat',
            'Study'
        ];
    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});