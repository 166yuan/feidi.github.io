var db  = require('../model');
var express = require('express');
var router = express.Router();
var state = require('../state');
var dateUtil = require('../util/date')
var mail = require('../util/mailUtil')

router.get('/', function(req, res) {
	var result = mail.sendMail(false,"1812864403@qq.com","注册验证","您的验证码为4321")
	res.send(result)
});




module.exports = router;