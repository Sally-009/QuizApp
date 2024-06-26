var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");  // added cors to allow cross-origin requests

// Routes ... *add line to Router endpoints as well
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quizzesRouter = require('./routes/quizzes');
var questionsRouter = require('./routes/questions');
var choicesRouter = require('./routes/choices');
var loginRouter = require('./routes/login');
var validateRouter = require('./routes/validate');
var auditRouter = require('./routes/audit');
var quizLogRouter = require('./routes/quizLog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());  // added cors to allow cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  // Access to public folder

// Routers endpoints
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quizzes', quizzesRouter);
app.use('/questions', questionsRouter);
app.use('/choices', choicesRouter);
app.use("/login", loginRouter); 
app.use("/validate", validateRouter);
app.use("/audit", auditRouter);
app.use("/quizLog", quizLogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
