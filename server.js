var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('express-sequelize');
var http = require('http');
var models = require('./model');

//var routes = require('./routes/index');
var customer  = require('./routes/customer');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());





/**
 * Get port from environment and store in Express.
 */

// app.set('port', 8000);


 let port = '4300'

//app.use('/', routes);
app.use('/customer', customer);


app.get('/',(req,res)=>{
  res.render('customer')
})


app.use(express.static('public'));

app.use('/images',express.static(__dirname + '/images'));


models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */
  app.listen(4300, function() {
    console.log('Express app listening on port ' + port);
  });
  app.on('error', onError);
  app.on('listening', onListening);
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP app "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP app "listening" event.
 */

function onListening() {

  console.log('Listening on ' + 4300);
}

module.exports=app;
