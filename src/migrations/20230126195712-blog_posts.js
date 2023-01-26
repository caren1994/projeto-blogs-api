'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await  queryInterface.createTable('blog_posts',{
      id:{
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
    },
      title:{
          allowNull: false,
          type: Sequelize.STRING,
    },
      content:{
          allowNull:false,
          type:Sequelize.STRING,
    },
      published:{
        allowNull:false,
        type:Sequelize.DATE,
      },
      updated:{
        allowNull:false,
        type:Sequelize.DATE,
      },
      userId:{
        allowNull: false,
        type:Sequelize.INTEGER,
        field:'user_id',
        references:{
          model:'users',
          key:'id',

        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',

      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('blog_posts');
  }
};
