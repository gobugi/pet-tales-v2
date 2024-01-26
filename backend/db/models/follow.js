'use strict';
const { Model } = require('sequelize');

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
        allowNull: false,
      },
      followerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Follow"
    }
  );
  return Follow;
};