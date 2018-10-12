var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = process.env.PORT || '3000';

var users = require('./routes/users');
var test = require('./routes/test');
var goods = require('./routes/goods');
var mine = require('./routes/mine');
var order = require('./routes/order');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//load component
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//load router
app.use('/users', users);
app.use('/test', test);
app.use('/goods', goods);
app.use('/mine', mine);
app.use('/order', order);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
