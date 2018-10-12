module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("order_water_store", {
    order_water_store_id: {type:DataTypes.STRING,primaryKey: true},
    water_store_id: DataTypes.STRING,
    water_deliver_id: DataTypes.STRING,
    water_store_name: DataTypes.STRING,
    deliver_return_bucket_quantity: DataTypes.INTEGER,
    receive_time: {type:DataTypes.DATE,},
    deliver_deposit: {type:DataTypes.FLOAT,defaultValue:sequelize.Sequelize.NOW},
    pay_order_number: DataTypes.STRING,
    pay_way: DataTypes.STRING,
    status: {type:DataTypes.BOOLEAN,defaultValue:0}
  }, {
  freezeTableName: true,
  timestamps: false
});
  
  return Order;
};