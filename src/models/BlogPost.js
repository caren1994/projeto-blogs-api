module.exports=(sequelize,DataTypes)=>{
  const BlogPost =sequelize.define('BlogPost',{
    id:{
      allowNull:false,
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    title:{
      allowNull:false,
      type:DataTypes.STRING,

    },
    content:{
    allowNull:false,
    type:DataTypes.STRING,
    },
    published:{
      allowNull:false,
      type:DataTypes.DATE,
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),

    },
    updated:{
      allowNull:false,
      type:DataTypes.DATE,
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
    },
    userId:{
      allowNull:false,
      type:DataTypes.INTEGER,
      foreignKey:true,
      field:'user_id'
    },

  },
  {
    timestamps:false,
    underscored:true,
    tableName:'blog_posts',
  });
  BlogPost.associate=(models)=>{
    BlogPost.belongsTo(models.User,{foreignKey:'userId',as:'user'})
  }
  return BlogPost;
}