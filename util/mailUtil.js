var fs        = require("fs");
var path      = require("path");
var mail = {}
var nodemailer = require('nodemailer');
var config = require(path.join(__dirname, '..', 'config', 'config.json'))["email"];
var transporter = nodemailer.createTransport(config);

var mailOptions = {
    from: 'feiditeam<feiditeam@163.com>', // 发件地址
    to: '907353268@qq.com', // 收件列表
    subject: 'Hello sir',
    text: 'demo'
};



var sendMail = function(isHTML,email,title,content){
	mailOptions.to = email;
	mailOptions.subject = title;
	if(isHTML){
		mailOptions.text = content;
	}else{
		mailOptions.html = content;
	}
	
	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});
}

mail.sendMail = sendMail;

module.exports = mail;