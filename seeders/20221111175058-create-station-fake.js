'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "Bến Xe Miền Tây",
          address: " 395 Kinh Dương Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
          province: "HCM",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
        {
          name: "Bến Xe Đà Nẵng",
          address: "Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng 550000",
          province: "DN",
          createdAt: "2021-03-26 07:06:14",
          updatedAt: "2021-03-26 07:06:14",
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("stations", null, {});
  }
};
