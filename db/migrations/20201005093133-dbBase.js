'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
       CREATE TABLE LOL(
        id INT,
        FirstName VARCHAR(31),
        LastName VARCHAR(30),
        birth DATE);
        `)},

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
    DROP TABLE LOL(
      id INT,
      FirstName VARCHAR(30),
      LastName VARCHAR(30),
      birth DATE);
    `);
  },
};
