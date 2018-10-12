var redis = require("redis");
var bluebird = require("bluebird");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var fs        = require("fs");
var path      = require("path");
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))["redis"];
var client = redis.createClient({
	"host":config.host,
	"port":config.port,
	"password":config.password,
	"db":1,
	"detect_buffers": true
});

client.on('error',function(error){
     console.log(error)   
});

module.exports = client;