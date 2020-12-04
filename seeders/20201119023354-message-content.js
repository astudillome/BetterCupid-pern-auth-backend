'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('messages', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkInsert('messages', [
      {
        user_a_Id: 1,
        user_b_Id: 2,
        content: "I think you are great",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_a_Id: 3,
        user_b_Id: 4,
        content: "I think you are fun",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_a_Id: 1,
        user_b_Id: 2,
        content: "I think you are sweet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_a_Id: 3,
        user_b_Id: 2,
        content: "I think you are hot",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },
  down: async (queryInterface, Sequelize) => {
  }
};
