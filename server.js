'use strict';

// modulos =================================================
var express = require('express');
var app = express();
var logger = require('morgan');

// mostrar en consola las peticiones al servidor
app.use(logger('dev'));

// establecer el puerto
app.set('port', process.env.PORT || 3000);

// establecer el entorno a 'desarrollo'
app.set('env', 'development');

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
  res.json(err);
});

// iniciar la app ===============================================
// lanza el servidor
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

// exporta la variable 'app'
module.exports = app;
