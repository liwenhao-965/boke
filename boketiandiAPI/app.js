

var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//生成一个express实例app
app.use(require('cors')())
var http = require('http');
var server = http.createServer(app);


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//静态资源
app.use(express.static(path.join(__dirname, 'public')));
//post请求,在这里注册一下post请求
app.use(bodyParser.urlencoded({extended:true}))

//路由控制器
app.use('/', indexRouter);
app.use('/users', usersRouter);



app.listen(5000, console.log("application is start at port 5000"))
