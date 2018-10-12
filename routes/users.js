var db  = require('../model');
var express = require('express');
var router = express.Router();
var state = require('../state');
var dateUtil = require('../util/date')
var moment = require('moment');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.water_store.findOne({
  	where: {water_store_id: '1'}
  }).then(project => {
  	var store = project.dataValues;
  });

  res.send('this is user demo page');
});

router.get('/getbyid/:id', function(req, res, next) {
  var id = req.params.id;
  db.water_store.findOne({
  	where: {water_store_id: id}
  }).then(project => {
  	var store = project.dataValues;
  	res.json(store);
  });


});

router.get('/login/:account/:psw', function(req, res) {
  var account = req.params.account;
  var psw = req.params.psw;
   db.water_store_auth.findOne({
  	where: {account: account,password:psw}
  }).then(project => {
  	if(project){
  		var store = project.dataValues;
  		db.water_store.findOne({
  			where: {water_store_id: store.water_store_id}
  		}).then(project => {
  			state.HTTP.success.data = project;
  			res.json(state.HTTP.success);
  		});
  		
  	}else{
  		state.HTTP.fail.msg = "account or password wrong!"
  		res.json(state.HTTP.fail);
  	}
  	
  });

});

router.post('/login', function(req, res) {
  console.log(req.body);		
  res.send('post login success');
});

router.post('/register', function(req, res) {
   var data = req.body;
   var wsid = dateUtil.getIdByTimeStampAndRandom(6);
   db.water_store.create({
   	'water_store_id':wsid,
   	'name':data.name,
   	'phone_number':data.phone_number,
   	'address':data.address,
   	'longitude':data.longitude,
   	'latitude':data.latitude,
   	'create_time':moment()
   	}).then(project => {
   		if(project){
        db.water_store_auth.create({
           identity_authentication_id: dateUtil.getIdByTimeStampAndRandom(6),
           account: data.account,
           password:data.psw,
           water_store_id:wsid
        }).then(project => {
          if(project){
            res.json(state.HTTP.success)
          }else{
            state.HTTP.fail.msg = "fail to register"
            res.json(state.HTTP.fail)
          }

        })

   		}else{
   			state.HTTP.fail.msg = "fail to register"
   			res.json(state.HTTP.fail)
   		}
   	})

});

module.exports = router;