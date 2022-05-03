'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cargos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      salarioId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Salarios',
            key: 'id',
            as: 'salarioId'
        }
      },
      sucursalId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Sucursals',
            key: 'id',
            as: 'sucursalId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cargos');
  }
};