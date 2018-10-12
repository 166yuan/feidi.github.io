var db  = require('../model');
var express = require('express');
var router = express.Router();
var state = require('../state');

router.get('/balance/:water_store_id', function(req, res) {
 var water_store_id = req.params.water_store_id;
 db.money_water_store.findOne({
 	where:{
 		water_store_id:water_store_id
 	}
 }).then(data=>{
 	if(data){
 		var money = {
 			"balance":data.dataValues.amount
 		}
	state.HTTP.success.data = money;
 	res.json(state.HTTP.success);
 }else{
 	state.HTTP.fail.msg = "wrong water_store_id";
 	res.json(state.HTTP.fail)
 }
 	
 })
 
});

//获取记录
router.get('/getBalanceRecord/:water_store_id/:page/:size', function(req, res) {
	var water_store_id = req.params.water_store_id;
	var page = req.params.page;
	var size = req.params.size;
	var result = {}
	db.money_wa_st_log.findAndCountAll({
		where:{ water_store_id:water_store_id },
		limit: parseInt(size), 
 		offset:parseInt((page-1)*size)
	}).then(data=>{
		if(data.count!=0){
			var arr = [];
			for (var i = 0; i < data.rows.length; i++) {
				arr.push({
					"water_store_id":data.rows[i].water_store_id,
					"amount":data.rows[i].balance,
					"time":data.rows[i].create_time
				});
			}
			result["total"] = data.count;
			result["orders"] = arr;
			state.HTTP.success.data = result;
			res.json(state.HTTP.success)
		}else{
			state.HTTP.fail.msg = "can't find record,wrong water store id";
			res.json(state.HTTP.fail)
		}
	});
});

router.get('/info/:water_store_id', function(req, res) {
	var water_store_id = req.params.water_store_id;
	db.water_store.findOne({
		where:{water_store_id:water_store_id}
	}).then(data=>{
		var result = {};
		if(data){
			result = data.dataValues;
			state.HTTP.success.data = result;
			res.json(state.HTTP.success)
		}else{
			state.HTTP.fail.msg = "can't find water store";
			res.json(state.HTTP.fail)
		}
		
	})
});

router.post('/resetPassword', function(req, res) {
	var water_store_id = req.body.water_store_id;
	var old_pwd = req.body.old_pwd;
	var new_pwd = req.body.new_pwd;
	db.water_store_auth.findOne({
		where:{
			water_store_id:water_store_id
		}
	}).then(data=>{
		if(data){
			if (old_pwd!=data.dataValues.password){
				state.HTTP.fail.msg = "wrong old password";
				res.json(state.HTTP.fail)
			}else{
				data.updateAttributes({
					password:new_pwd
				})
				res.json(state.HTTP.success)
			}
		}else{
			state.HTTP.fail.msg = "wrong water store id";
			res.json(state.HTTP.fail)
		}
	})

});
module.exports = router;