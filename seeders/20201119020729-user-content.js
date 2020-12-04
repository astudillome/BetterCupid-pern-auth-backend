'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkInsert('users', [{
      email: "john@here.com",
      name: "John Doe",
      password: bcrypt.hashSync('password', 12),
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "mary@here.com",
      name: "Mary Smith",
      password: bcrypt.hashSync('password', 12),
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "adam@here.com",
      name: "Adam Johnson",
      password: bcrypt.hashSync('password', 12),
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "sandy@here.com",
      name: "Sandy Cheeks",
      password: bcrypt.hashSync('password', 12),
      birthday: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ], {});
  },
  down: async (queryInterface, Sequelize) => {
  }
}