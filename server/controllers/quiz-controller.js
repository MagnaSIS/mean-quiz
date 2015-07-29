'use strict';

//Datos de prueba
var quizzes = [{
    pregunta: '¿Capital de Italia?',
    respuesta: 'Roma',
    _id: 0
}, {
    pregunta: '¿Capital de Francia?',
    respuesta: 'París',
    _id: 1
}];

var lastId = 1;

/* GET /api/quizes
 ** returns an array of quizes OR null if there are no quizes 
 */
exports.list = function(req, res, next) {
    res.json(quizzes);
};

/* POST /api/quizes
 ** returns true if the quiz is created OR an error if there is an error
 */
exports.create = function(req, res, next) {
    var quiz = req.body;
    quiz._id = ++lastId;
    quizzes.push(quiz);
    res.json({
        success: true
    });
};

/* DELETE /api/quizes/:quizId
 ** returns a true if the quiz is removed OR an error
 */
exports.remove = function(req, res, next) {
    var success = false;
    for (var i = 0; i < quizzes.length; i++) {
        if (quizzes[i]._id == req.params.quizId) {
            quizzes.splice(i, 1);
            success = true;
            break;
        }
    }
    res.json({
        success: success
    });
};
