'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('profiles', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkInsert('profiles', [{
      userId: "1",
      display_name: "John Doe",
      gender: "male",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      city: "Boulder",
      state: "Colorado",
      about_me: "I love bananas",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: "2",
      display_name: "Mary Smith",
      gender: "female",
      image: "https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg",
      city: "Boulder",
      state: "Colorado",
      about_me: "I love bananas",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: "3",
      display_name: "Adam Johnson",
      gender: "male",
      image: "https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg",
      city: "Boulder",
      state: "Colorado",
      about_me: "I love bananas",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: "4",
      display_name: "Sandy Cheeks",
      gender: "female",
      image: "https://benjamin.dk/wp-content/uploads/2020/07/woman-top-benjamin-media.png",
      city: "Boulder",
      state: "Colorado",
      about_me: "I love bananas",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
  }
};