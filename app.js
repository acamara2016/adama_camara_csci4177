var createError = require('http-errors');
var con = require('./db/connection');
const cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors()) // Use this after the variable declaration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/addPart', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.post('/create', function(req, res) {
  const sql = 'INSERT INTO `Part` (`partDescription`, `partName`, `currentPrice`, `qty`, `poNo`) VALUES ('+req.body.part_description+', '+req.body.part_name+', '+req.body.part_current_price+', '+req.body.part_qty+',1);'
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  })
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