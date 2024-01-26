'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        email: 'peter@peter.com',
        username: 'peter',
        hashedPassword: bcrypt.hashSync('4score7yearsagopw'),
      },
      {
        email: 'paul@paul.com',
        username: 'paul',
        hashedPassword: bcrypt.hashSync('4score7yearsagopw'),
      },
      {
        email: 'mary@mary.com',
        username: 'mary',
        hashedPassword: bcrypt.hashSync('4score7yearsagopw'),
      },
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('4score7yearsagopw'),
      },
      {
        email: 'fakeUser1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('4score7yearsagopw'),
      },
      {
        email: 'fakeUser2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('4score7yearsagopw'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
