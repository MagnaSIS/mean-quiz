'use strict';

// Datos de prueba
var quizzes = [{
    pregunta: '¿Capital de Italia?',
    respuesta: 'Roma'
}, {
    pregunta: '¿Capital de Francia?',
    respuesta: 'París'
}];

var quizControllers = angular.module('quizControllers', []);

quizControllers.controller('IndexCtrl', [function() {
    var self = this;
    self.title = 'Quiz: el juego de las preguntas';
}]);

quizControllers.controller('QuizCtrl', [function() {
    var self = this;
    self.quizzes = quizzes;

    self.remove = function(quiz) {
        var index = quizzes.indexOf(quiz);
        quizzes.splice(index, 1);
    };
}]);

quizControllers.controller('QuizCreateCtrl', [function() {
    var self = this;
    self.create = function() {
        var quiz = self.quiz;
        quizzes.push(quiz);
        self.success = 'Pregunta creada correctamente.';
    };
}]);
