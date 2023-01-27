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
  })
  return Category;
}