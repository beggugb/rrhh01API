'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente',
      });
      Ticket.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario',
      });
    }
  };
  Ticket.init({
    fechaRegistro: DataTypes.DATE,
    fechaCierre: DataTypes.DATE,
    codigo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    detalle: DataTypes.STRING,
    estado: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER,
    clients: DataTypes.STRING,
    gestion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};