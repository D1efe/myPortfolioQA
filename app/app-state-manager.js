"use strict";

var webApp = angular.module('webApp', ['ui.router']);

webApp.config(function($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "app/feature/home/home.html"
    }
    var aboutMeState = {
        name: "about-me",
        url: "/about-me",
        templateUrl: "app/feature/about-me/about-me.html"
    }
    var projectListState = {
        name: "project-list",
        url: "/project-list",
        templateUrl: "app/feature/project-list/project-list.html"
    }
    var jsExercisesState = {
        name: "js-exercises",
        url: "/js-exercises",
        templateUrl: 'app/feature/js-exercises/js-exercises.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(aboutMeState);
    $stateProvider.state(projectListState);
    $stateProvider.state(jsExercisesState);

});


    /*angular.module('webApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/feature/home/home.html"
        }).state("about-me", {
            url: "/about-me",
            templateUrl: "app/feature/about-me/about-me.html"
        }).state("project-list", {
            url: "/project-list",
            templateUrl: "app/feature/project-list/project-list.html"
        }).state("js-exercises", {
            url: "/js-exercises",
            templateUrl: "app/feature/js-exercises/js-exercises.html"
        })
    });
}());*/