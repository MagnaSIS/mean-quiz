'use strict';

var Quiz = require('../models/quiz');

/* GET /api/quizes
 ** returns an array of quizes OR null if there are no quizes 
 */
exports.list = function(req, res, next) {
    var onSuccess = function(quizes) {
        res.json(quizes);
    };
    var onFailure = function(err) {
        next(err);
    };
    Quiz.find().exec().then(onSuccess, onFailure);
};

/* POST /api/quizes
 ** returns true if the quiz is created OR an error if there is an error
 */
exports.create = function(req, res, next) {
    var onSuccess = function(quiz) {
        res.json({
            success: true
        });
    };
    var onFailure = function(err) {
        next(err);
    };
    Quiz.create(req.body).then(onSuccess, onFailure);
};

/* DELETE /api/quizes/:quizId
 ** returns a true if the quiz is removed OR an error
 */
exports.remove = function(req, res, next) {
    var onSuccess = function() {
        res.json({
            success: true
        });
    };
    var onFailure = function(err) {
        next(err);
    };
    Quiz.remove({
        _id: req.params.quizId
    }).exec().then(onSuccess, onFailure);
};
