module.exports = function(sequelize, DataTypes) {
  var Bucket = sequelize.define("water_bucket", {
    bucket_type_id: {type:DataTypes.INTEGER,primaryKey: true},
    name: DataTypes.STRING,
    brand:DataTypes.STRING,
    pic_url:DataTypes.STRING,
    standard:DataTypes.INTEGER,
    bl_bu_pr:DataTypes.FLOAT,
    pr_for_wa_us:DataTypes.FLOAT,
    pr_for_wa_st:DataTypes.FLOAT,
    pr_for_wa_de:DataTypes.FLOAT,
    producer_price:DataTypes.FLOAT,
    is_disposable:{type:DataTypes.BOOLEAN,defaultValue:0},
    sales_all:DataTypes.INTEGER,
    sales_recently:DataTypes.INTEGER
  }, {
  freezeTableName: true,
  timestamps:false
});
  
  return Bucket;
};