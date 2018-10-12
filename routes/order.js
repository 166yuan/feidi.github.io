var db  = require('../model');
var express = require('express');
var router = express.Router();
var state = require('../state');

//获取新订单（待修改）
router.get('/newOrders/:water_store_id/:page/:size', function (req, res) {
 var water_store_id = req.params.water_store_id;
 var page = req.params.page;
 var size = req.params.size;
 db.order_water_store.findAndCountAll({
 	where:{ water_store_id:water_store_id },
 	limit: parseInt(size), 
 	offset:parseInt((page-1)*size)
 }).then(data=>{
 	if(data.count==0){
 		res.json(state.HTTP.fail)
 	}else{
 		var orderList = data.rows;
 		var orderData = {
 			orders:[],
 			total:0
 		}
 		orderData.total = data.count;
 		getOrderInfo(orderData,orderList,res);
 	}
 })
});

//获取新订单（待修改）
router.get('/blankBucketList/:water_store_id/:page/:size', function (req, res) {
	 var water_store_id = req.params.water_store_id;
 	 var page = req.params.page;
 	 var size = req.params.size;
 	 db.order_water_store.findAndCountAll({
 	where:{ water_store_id:water_store_id },
 	limit: parseInt(size), 
 	offset:parseInt((page-1)*size)
 }).then(data=>{
 	if(data.count==0){
 		res.json(state.HTTP.fail)
 	}else{
 		var orderList = data.rows;
 		var orderData = {
 			orders:[],
 			total:0
 		}
 		orderData.total = data.count;
 		getOrderInfo(orderData,orderList,res);
 	}
 })

});

//确认空桶
router.post('/confirmBucket', function (req, res) {
	var water_store_id = req.body.water_store_id;
	var order_water_store_id = req.body.order_water_store_id;
	var status = req.body.status;
	db.order_water_store.findOne({
		where:{
			order_water_store_id:order_water_store_id,
			water_store_id:water_store_id,
			status:status
		}
	}).then(data=>{
		if(data){
			res.json(state.HTTP.success)
		}else{
			res.json(state.HTTP.fail)
		}
	})
});

const getOrderInfo = async (orderData,orderList,res) => {

	for (prop in orderList) {
		var metaData = {};
		var wdid = orderList[prop].water_deliver_id;
		var oid = orderList[prop].order_water_store_id;
		metaData['order_water_store_id'] = oid;
		metaData['time'] = orderList[prop].receive_time;
		metaData['barrel_amount'] = orderList[prop].deliver_return_bucket_quantity;
		metaData['status'] = orderList[prop].status;
		//读取送水工信息
		const deliver = await db.water_deliver.findOne({where:{ water_deliver_id:wdid }});
		metaData['carrier'] = deliver.dataValues.name;
		metaData['carrier_phone'] = deliver.dataValues.phone_number;
		orderData.orders.push(metaData);
	}
	res.json(orderData)
}	


module.exports = router;