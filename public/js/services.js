'use strict';

var quizServices = angular.module('quizServices', ['ngResource']);

quizServices.factory('Quiz', ['$resource', function($resource) {
    return $resource('api/quiz/:quizId');
}]);
