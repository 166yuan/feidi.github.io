module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("order_user_finish", {
    order_water_store_id: {type:DataTypes.STRING,primaryKey: true},
    order_user_id: {type:DataTypes.STRING,primaryKey: true},
    user_deposit: DataTypes.FLOAT,
    pay_order_number: DataTypes.STRING,
    finish_time:DataTypes.DATE,
    pay_way:DataTypes.STRING,
    user_extra_bucket_num:DataTypes.INTEGER
  }, {
  freezeTableName: true,
  timestamps: false
});
  
  return Order;
};