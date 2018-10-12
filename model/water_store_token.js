module.exports = function(sequelize, DataTypes) {
  var Token = sequelize.define("water_store_token", {
    water_store_token_id: {type:DataTypes.STRING,primaryKey: true},
    sign: DataTypes.STRING,
    water_store_id:DataTypes.STRING
  }, {
  freezeTableName: true,
  timestamps: false
});
  return Token;
};