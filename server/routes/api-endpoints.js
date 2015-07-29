'use strict';

var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz-controller');

// API endpoints

router.get('/quiz', quizController.list);
router.post('/quiz', quizController.create);
router.delete('/quiz/:quizId', quizController.remove);

module.exports = router;
