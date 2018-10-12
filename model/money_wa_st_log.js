module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("money_wa_st_log", {
    money_wa_st_log_id: {type:DataTypes.STRING,primaryKey: true},
    water_store_id: DataTypes.STRING,
    deposit:DataTypes.FLOAT,
    balance:DataTypes.FLOAT,
    bond:DataTypes.FLOAT,
    freeze_balance:DataTypes.FLOAT,
    balanced_change:DataTypes.FLOAT,
    reason:{type:DataTypes.BOOLEAN,defaultValue:0},
    create_time:{type:DataTypes.DATE,defaultValue:sequelize.Sequelize.NOW}
  }, {
  freezeTableName: true,
  timestamps: false
});
  
  return Store;
};