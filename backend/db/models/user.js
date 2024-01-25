'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Story, {foreignKey: 'authorId', onDelete: 'CASCADE', hooks: true });
      User.hasMany(models.Comment, {foreignKey: 'userId', onDelete: 'CASCADE', hooks: true });
      User.hasMany(models.Like, {foreignKey: 'userId', onDelete: 'CASCADE', hooks: true });
      User.hasMany(models.Follow, {foreignKey: 'followerId', onDelete: 'CASCADE', hooks: true });
      User.hasMany(models.Follow, {foreignKey: 'userId', onDelete: 'CASCADE', hooks: true });
    }
  };

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail: true
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      }
    }
  );

  // User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
  //   const { id, username, email } = this; // context will be the User instance
  //   return { id, username, email };
  // };

  // User.prototype.validatePassword = function (password) {
  //   return bcrypt.compareSync(password, this.hashedPassword.toString());
  // };

  // User.getCurrentUserById = async function (id) {
  //   return await User.scope('currentUser').findByPk(id);
  // };

  // User.login = async function ({ credential, password }) {
  //   const { Op } = require('sequelize');
  //   const user = await User.scope('loginUser').findOne({
  //     where: {
  //       [Op.or]: {
  //         username: credential,
  //         email: credential,
  //       },
  //     },
  //   });
  //   if (user && user.validatePassword(password)) {
  //     return await User.scope('currentUser').findByPk(user.id);
  //   }
  // };

  // User.signup = async function ({ username, email, password }) {
  //   const hashedPassword = bcrypt.hashSync(password);
  //   const user = await User.create({
  //     username,
  //     email,
  //     hashedPassword,
  //   });
  //   return await User.scope('currentUser').findByPk(user.id);
  // };

  return User;
};
