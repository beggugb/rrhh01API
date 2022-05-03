'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contratos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nro: {
        type: Sequelize.STRING
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      fechaFin: {
        type: Sequelize.STRING
      },
      plazo: {
        type: Sequelize.STRING
      },
      contratado: {
        type: Sequelize.BOOLEAN
      },
      observaciones: {
        type: Sequelize.STRING
      },   
      personaId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Personas',
            key: 'id',
            as: 'personaId'
        }
      },
      horarioId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Horarios',
            key: 'id',
            as: 'horarioId'
        }
      },
      salarioId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Salarios',
            key: 'id',
            as: 'salarioId'
        }
      },
      cargoId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Cargos',
            key: 'id',
            as: 'cargoId'
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
    await queryInterface.dropTable('Contratos');
  }
};