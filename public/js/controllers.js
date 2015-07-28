'use strict';

var quizControllers = angular.module('quizControllers', []);

quizControllers.controller('IndexCtrl', [function() {
    var self = this;
    self.quizzes = [{
        pregunta: '¿Capital de Italia?',
        respuesta: 'Roma'
    }, {
        pregunta: '¿Capital de Francia?',
        respuesta: 'París'
    }];
}]);
