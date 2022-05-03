'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EstudiosPersonas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carrera: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      ciudad: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      nivel: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      universidadId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Universidads',
            key: 'id',
            as: 'universidadId'
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
    await queryInterface.dropTable('EstudiosPersonas');
  }
};