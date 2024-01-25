'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, { foreignKey: 'userId' });
      Comment.belongsTo(models.Story, { foreignKey: 'storyId' });
    }
  };

  Comment.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      storyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Comment"
    }
  );
  return Comment;
};