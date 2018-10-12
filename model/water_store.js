module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("water_store", {
    water_store_id: {type:DataTypes.STRING,primaryKey: true},
    name: DataTypes.STRING,
    phone_number:DataTypes.STRING,
    service_grade:{type:DataTypes.FLOAT,defaultValue:0},
    detail_photo_url:DataTypes.STRING,
    cover_photo_url:DataTypes.STRING,
    modified_time:DataTypes.DATE,
    longitude:DataTypes.DOUBLE,
    latitude:DataTypes.DOUBLE,
    detail_address:DataTypes.STRING,
    address:DataTypes.STRING,
    status:{type:DataTypes.INTEGER,defaultValue:2},
    create_time:{type:DataTypes.DATE,defaultValue:sequelize.Sequelize.NOW}
  }, {
  freezeTableName: true,
  timestamps:false
});
  
  return Store;
};