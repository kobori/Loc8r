const mongoose = require('mongoose');
require('./locations');
var gracefulShutdown;

const dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

/* Monitorando as conexões pelo Mongoose */
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});

/* Monitorando os erros de conexão */
mongoose.connection.on('error', function() {
  console.log('Mongoose connection error: ' + err);
});

/* Monitorando os eventos de desconexão */
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

/* Função reutilizável para encerrar uma conexão com o Mongoose */
gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconected through ' + msg);
    callback();
  });
};

// Para os reinicios do nodemon
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.exit(0);
  });
});

// Para o encerramento da aplicação
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function() {
    process.exit(0);
  });
});


