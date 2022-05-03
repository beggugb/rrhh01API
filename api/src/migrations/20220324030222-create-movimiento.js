'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movimientos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origen: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      compraId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Compras',
          key: 'id',
          as: 'compraId'
        }
      },
      ventaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Venta',
          key: 'id',
          as: 'ventaId'
        }
      },
      almacenId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Almacens',
          key: 'id',
          as: 'almacenId'
        }
      },
      usuarioId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Usuarios',
            key: 'id',
            as: 'usuarioId'
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
    await queryInterface.dropTable('Movimientos');
  }
};