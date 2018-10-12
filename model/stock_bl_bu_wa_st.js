module.exports = function(sequelize, DataTypes) {
  var quantity = sequelize.define("stock_bl_bu_wa_st", {
    water_store_id: {type:DataTypes.STRING,primaryKey: true},
    bucket_type_id: {type:DataTypes.STRING,primaryKey: true},
    quantity:DataTypes.INTEGER
  }, {
  freezeTableName: true,
  timestamps: false
});
  
  return quantity;
};