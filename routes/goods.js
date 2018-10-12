var db  = require('../model');
var express = require('express');
var router = express.Router();
var state = require('../state');

//拿到数据库所有品牌
router.get('/getAllBrands/', function(req, res) {
 var brands = []
var brands = []
   db.water_bucket.findAll({
   	attributes: ['brand', [db.sequelize.fn('sum', db.sequelize.col('brand')), 'brand_sum']],
   	group: ['brand']
   }).then(project=>{
   	for (prop in project) {
   		brands.push(project[prop].dataValues.brand)
   	}
   	if(project.length!=0){
   		state.HTTP.success.data['brands'] = brands;
 		res.json(state.HTTP.success);
   	}else{
   		state.HTTP.fail.msg = 'get no brand';
 		res.json(state.HTTP.fail);
   	}
   });

});

//拿到单一品牌下商品
router.get('/getBrandGood/:brand', function(req, res, next) {
 var brand = req.params.brand;
 var type = []
 db.water_bucket.findAll({
 	where: {brand: brand}
 	}).then(project => {
 	if(project.length!=0){
 		for (prop in project) {
 			type.push({
 				"name":project[prop].name
 			});
 		}
   
 		state.HTTP.success.data = type;
 		res.json(state.HTTP.success);
 	}else{
 		state.HTTP.fail.msg = 'get no brand';
 		res.json(state.HTTP.fail);
 	}
  	
  });
});

//获取商品规格
router.get('/getTypes/:brand/:name', function(req, res, next) {
 var brand = req.params.brand;
 var name = req.params.name;
 var standards = []
 db.water_bucket.findAll({
 	where: {brand: brand,name:name}
 	}).then(project => {
 	if(project.length!=0){
 		for (prop in project) {
 			standards.push({
 				"bucket_type_id":project[prop].bucket_type_id,
 				"standard":project[prop].standard
 			});
 		}
   
 		state.HTTP.success.data["standards"] = standards;
 		res.json(state.HTTP.success);
 	}else{
 		state.HTTP.fail.msg = 'get no types';
 		res.json(state.HTTP.fail);
 	}
  	
  });
});

//上传存在的商品
router.post('/uploadExistGoood', function(req, res, next) {
 var water_store_id = req.body.water_store_id;
 var bucket_type_id = req.body.bucket_type_id;
 var quantity = req.body.quantity;
 db.stock_bl_bu_wa_st.create({
 	water_store_id:water_store_id,
 	bucket_type_id:bucket_type_id,
 	quantity:quantity
 }).then(project=>{
 	if(project){
 		res.json(state.HTTP.success);
 	}else{
 		state.HTTP.fail.msg = 'fail to add product';
 		res.json(state.HTTP.fail);
 	}
 })
 
});

//获取水店商品列表
router.get('/getList/:water_store_id/:page/:size', function (req, res) {
 var water_store_id = req.params.water_store_id;
 var page = req.params.page;
 var size = req.params.size;
 db.stock_bl_bu_wa_st.findAll({
 	where:{ water_store_id:water_store_id },
 	limit: parseInt(size), 
 	offset:parseInt((page-1)*size)
 }).then(project=>{
 	getInfo(project,res);
 })
});

//更新商品数据
router.post('/updateGood', function (req, res) {
	var water_store_id = req.body.water_store_id;
	var bucket_type_id = req.body.bucket_type_id;
	var quantity = req.body.quantity;
	db.stock_bl_bu_wa_st.findOne({where:{
			water_store_id:water_store_id,
			bucket_type_id:bucket_type_id
	}}).then(data=>{
		if(data){
			data.updateAttributes({
        		quantity: quantity
      		}).then(project=>{
      			if(project){
      				res.json(state.HTTP.success);
      			}else{
      				state.HTTP.fail.msg = 'fail to update';
      				res.json(state.HTTP.fail);
      			}
      		});
		}else{
			state.HTTP.fail.msg = "fail to find bucket";
			res.json(state.HTTP.fail)
		}
	})
});

//删除店家所有商品
router.post('/delAllGoods', function (req, res) {
 var water_store_id = req.body.water_store_id;
 db.stock_bl_bu_wa_st.destroy({
 	where:{water_store_id:water_store_id}
 }).then(data=>{
 	if(data != 0){
 		res.json(state.HTTP.success)
 	}else{
 		state.HTTP.fail.msg = 'wrong water store id';
 		res.json(state.HTTP.fail)
 	}
 })

});

//删除店家指定水桶类型商品
router.post('/delBucketGoods', function (req, res) {
 
 var water_store_id = req.body.water_store_id;
 var bucket_type_id = req.body.bucket_type_id;
 console.log(bucket_type_id.length)
 // db.stock_bl_bu_wa_st.destroy({
 // 	where:{water_store_id:water_store_id}
 // }).then(data=>{
 // 	if(data != 0){
 // 		res.json(state.HTTP.success)
 // 	}else{
 // 		state.HTTP.fail.msg = 'wrong water store id';
 // 		res.json(state.HTTP.fail)
 // 	}
 // })

});

//同步处理数据
const getInfo = async (waterData,res) => {
	var water = [];
	for (prop in waterData) {
 		var tempData = waterData[prop].dataValues
 		var btid = tempData.bucket_type_id;
 		var bucket = getInfo(btid);
 		const proData = await db.water_bucket.findOne({where:{ bucket_type_id:btid }});
 		water.push({
 			bucket_type_id:btid,
 			brand:proData.dataValues.brand,
 			name:proData.dataValues.brand,
 			standard:tempData.standard,
 			quantity:tempData.quantity
 		})
 	}
 	state.HTTP.success.data["water"] = water;
 	res.json(state.HTTP.success)
}

module.exports = router;