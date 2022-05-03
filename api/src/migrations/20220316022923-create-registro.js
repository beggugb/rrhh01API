'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Registros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      hora: {
        type: Sequelize.DATE
      },
      minutos: {
        type: Sequelize.DATE
      },
      dia: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.NUMERIC
      },
      descuento: {
        type: Sequelize.DECIMAL
      },
      contratoId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Contratos',
            key: 'id',
            as: 'contratoId'
        }
      },
      personaId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Personas',
            key: 'id',
            as: 'personaId'
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
    await queryInterface.dropTable('Registros');
  }
};