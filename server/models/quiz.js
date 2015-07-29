'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    pregunta: {
        type: String,
        required: true
    },
    respuesta: {
        type: String,
        required: true
    },
});

var Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
