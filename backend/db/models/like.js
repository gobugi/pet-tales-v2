'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      // define association here
      Like.belongsTo(models.User, { foreignKey: 'userId' });
      Like.belongsTo(models.Story, { foreignKey: 'storyId' });
    }
  };

  Like.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      followerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Like"
    }
  );
  return Like;
};