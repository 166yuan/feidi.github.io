module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("money_water_store", {
    money_water_store_id: {type:DataTypes.STRING,primaryKey: true},
    water_store_id: DataTypes.STRING,
    money_id:DataTypes.STRING,
    amount:DataTypes.FLOAT
  }, {
  freezeTableName: true,
  timestamps: false
});
  
  return Store;
};