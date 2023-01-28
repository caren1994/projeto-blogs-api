module.exports=(sequelize,DataTypes)=>{
  const Category=sequelize.define('Category',{
    id:{
      allowNull:false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name:{
      allowNull:false,
      type: DataTypes.STRING,
    }
  },{
    timestamps: false,
    tableName:'categories',
    underscored: true,
  })
  return Category;
}