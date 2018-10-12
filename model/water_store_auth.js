module.exports = function(sequelize, DataTypes) {
  var Auth = sequelize.define("water_store_auth", {
    identity_authentication_id: {type:DataTypes.STRING,primaryKey: true},
    account: DataTypes.STRING,
    password:DataTypes.STRING,
    water_store_id:DataTypes.STRING
  }, {
  freezeTableName: true,
  timestamps: false
});
  return Auth;
};