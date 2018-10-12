var sd = {};
var HTTP = {}
HTTP.success = {
	status:0,
	data:{}
};
HTTP.fail = {
	status:1,
	msg:"fail"
};

sd.HTTP = HTTP;
module.exports = sd;