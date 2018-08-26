"use strict";

(function () {

    angular.module('webApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/feature/home/home.html"
        }).state("aboutme", {
            url: "/about-me",
            templateUrl: "app/feature/about-me/about-me.html"
        }).state("jsexercise", {
            url: "/js-exercises",
            templateUrl: "app/feature/js-exercises/js-exercises.html"
        }).state("projectlist", {
            url: "/project-list",
            templateUrl: "app/feature/project-list/project-list.html"
        }).state("gameapi", {
            url: "/gameapi",
            templateUrl: "app/feature/gameapi/gameapi.html"
        })
    });
}());

