'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    static associate(models) {
      // define association here
      Story.belongsTo(models.User, { foreignKey: 'authorId' });
      Story.hasMany(models.Comment, { foreignKey: 'storyId', onDelete: 'CASCADE', hooks: true });
      Story.hasMany(models.Like, { foreignKey: 'storyId', onDelete: 'CASCADE', hooks: true });
    }
  };

  Story.init(
    {
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Story"
    }
  );
  return Story;
};