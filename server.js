'use strict';

// modulos =================================================
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// configuracion =========================================

// conexion a la base de datos
mongoose.connect('mongodb://' + process.env.IP + '/quiz');

var db = mongoose.connection;
db.once('open', function() {
  console.log('Connected to database');
});

// rutas ==================================================
var apiEndpoints = require('./server/routes/api-endpoints');

// mostrar en consola las peticiones al servidor
app.use(logger('dev'));

// establecer el puerto
app.set('port', process.env.PORT || 3000);

// establecer el entorno a 'desarrollo'
app.set('env', 'development');

// obtener datos de parametros body (peticiones POST)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// establecer rutas api
app.use('/api/', apiEndpoints);

// establecer ruta de ficheros estáticos - /public/img pasa a ser la URL /img
app.use(express.static(__dirname + '/public'));

// captura errores 404 y redirige al manejador de errores
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// manejador en caso de error
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send("<h1>Error " + err.status + ": " + err.message + "</h1>");
});

// iniciar la app ===============================================
// lanza el servidor
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

// exporta la variable 'app'
module.exports = app;
