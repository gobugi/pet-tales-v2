'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        storyId: 1,
        body: 'Awesome!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 1,
        body: 'Breathtaking!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        storyId: 1,
        body: 'Amazing!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        storyId: 1,
        body: 'Stunning!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        storyId: 2,
        body: 'Astounding!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 2,
        body: 'Astonishing!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        storyId: 2,
        body: 'Awe-inspiring!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        storyId: 2,
        body: 'Incredible!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        storyId: 3,
        body: 'Stupendous!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 3,
        body: 'Extraordinary!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        storyId: 3,
        body: 'Unbelievable!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        storyId: 3,
        body: 'Magnificent!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        storyId: 4,
        body: 'Awesome!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 5,
        body: 'Breathtaking!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        storyId: 6,
        body: 'Amazing!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        storyId: 7,
        body: 'Stunning!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 8,
        body: 'Astounding!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        storyId: 9,
        body: 'Astonishing!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        storyId: 10,
        body: 'Awe-inspiring!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 11,
        body: 'Incredible!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        storyId: 12,
        body: 'Stupendous!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        storyId: 13,
        body: 'Extraordinary!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 14,
        body: 'Unbelievable!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        storyId: 15,
        body: 'Magnificent!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        storyId: 16,
        body: 'Awesome!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 17,
        body: 'Breathtaking!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        storyId: 18,
        body: 'Amazing!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        storyId: 19,
        body: 'Stunning!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        storyId: 20,
        body: 'Astounding!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkDelete(options, null, {});
  }
};
