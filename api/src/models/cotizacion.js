'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cotizacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cotizacion.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente',
      });
      Cotizacion.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario',
      });
    }
  };
  Cotizacion.init({
    fechaCotizacion: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE,
    nroItems: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    observaciones: DataTypes.STRING,
    clients: DataTypes.STRING,
    estado: DataTypes.STRING,
    clienteId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    gestion: DataTypes.INTEGER,
    formaPago: DataTypes.STRING,
    formaEntrega: DataTypes.STRING,
    subTotal: DataTypes.DECIMAL,
    iva: DataTypes.DECIMAL,
    descuento: DataTypes.DECIMAL,
    impuesto: DataTypes.DECIMAL,
    totalGeneral: DataTypes.DECIMAL,
    totalDescuento: DataTypes.DECIMAL

  }, {
    sequelize,
    modelName: 'Cotizacion',
  });
  return Cotizacion;
};