module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("order_wa_bu_or_us", {
    order_user_id: {type:DataTypes.STRING,primaryKey: true},
    bucket_type_id: {type:DataTypes.STRING,primaryKey: true},
    quantity:DataTypes.INTEGER
  }, {
  freezeTableName: true,
  timestamps: false
});
  
  return Order;
};