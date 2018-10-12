module.exports = function(sequelize, DataTypes) {
  var deliver = sequelize.define("water_deliver", {
    water_deliver_id: {type:DataTypes.STRING,primaryKey: true},
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
  freezeTableName: true,
  timestamps:false
});
  return deliver;
};