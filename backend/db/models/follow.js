'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    static associate(models) {
      // define association here
      Follow.belongsTo(models.User, { foreignKey: 'userId' });
      Follow.belongsTo(models.User, { foreignKey: 'followerId' });
    }
  };

  Follow.init(
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      followerId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Follow"
    }
  );
  return Follow;
};