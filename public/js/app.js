'use strict';

var quizApp = angular.module('quizApp', [
    'ngRoute',
    'quizControllers'
]);

quizApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "IndexCtrl",
            controllerAs: "vm",
            templateUrl: "views/home.html"
        })
        .when("/quiz", {
            controller: "QuizCtrl",
            controllerAs: "vm",
            templateUrl: "views/quiz.html"
        }).when("/quiz/create", {
            controller: "QuizCreateCtrl",
            controllerAs: "vm",
            templateUrl: "views/quiz-create.html"
        });
});
