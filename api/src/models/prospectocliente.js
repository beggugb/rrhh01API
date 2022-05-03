'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProspectoCliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProspectoCliente.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente',
      });
      ProspectoCliente.belongsTo(models.Prospecto, {
        foreignKey: 'prospectoId',
        as: 'prospecto',
      });
    }
  };
  ProspectoCliente.init({
    clienteId: DataTypes.INTEGER,
    prospectoId: DataTypes.INTEGER,
    nroMensajes: DataTypes.INTEGER,
    nroEmail: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProspectoCliente',
  });
  return ProspectoCliente;
};