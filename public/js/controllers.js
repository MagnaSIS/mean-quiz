'use strict';

var quizControllers = angular.module('quizControllers', []);

quizControllers.controller('IndexCtrl', [function() {
    var self = this;
    self.title = 'Quiz: el juego de las preguntas';
}]);

quizControllers.controller('QuizCtrl', ['Quiz', function(Quiz) {
    var self = this;
    self.quizzes = Quiz.query();

    self.remove = function(quiz) {
        Quiz.remove({
            quizId: quiz._id
        }, function(response) {
            if (response.success) {
                var index = self.quizzes.indexOf(quiz);
                self.quizzes.splice(index, 1);
            }
            else {
                alert('Ha ocurrido un error y no se ha podido eliminar el quiz.');
            }
        });
    };
}]);

quizControllers.controller('QuizCreateCtrl', ['Quiz', function(Quiz) {
    var self = this;
    self.create = function() {
        var quiz = new Quiz(self.quiz);
        quiz.$save({}, function(response) {
            if (response.success) {
                self.success = 'Pregunta creada correctamente.';
            }
            else {
                self.success = 'Ha ocurrido un error creando la pregunta.';
            }
        });
    };
}]);
