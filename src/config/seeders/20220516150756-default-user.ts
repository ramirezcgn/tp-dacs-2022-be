/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
console.log('asdfasdf');

module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('up?');
    await queryInterface.bulkInsert(
      'User',
      [
        {
          name: 'admin',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john-doe@admin.com',
          password: 'password',
        },
      ],
      {},
    );
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
