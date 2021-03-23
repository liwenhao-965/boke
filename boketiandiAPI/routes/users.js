var express = require('express');
var router = express.Router();
var User = require('../controllers/Usercontroller');

/* post 方法users listing. */
//这里调用控制层的接口，控制层的接口去调用连接数据库暴露出来的数据
router.post('/sendCode',User.sendCode );
router.post('/codePhoneLogin',User.codePhoneLogin );

module.exports = router;
