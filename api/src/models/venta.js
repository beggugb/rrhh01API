'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Venta.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente',
      });
      Venta.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario',
      });
      Venta.hasMany(models.NotaCobranza, {
        foreignKey: 'ventaId',
        as: 'notacobranza',
      });
    }
  };
  Venta.init({
    nro: DataTypes.INTEGER,
    fechaVenta: DataTypes.DATE,
    tipo: DataTypes.STRING,
    nroItems: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    observaciones: DataTypes.STRING,
    clients: DataTypes.STRING,
    estado: DataTypes.STRING,
    clienteId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    nroPagos: DataTypes.INTEGER,
    nits: DataTypes.STRING,    
    fechaAprobacion: DataTypes.DATE,
    gestion: DataTypes.INTEGER,
    mes: DataTypes.INTEGER,
    subTotal: DataTypes.DECIMAL,    
    iva: DataTypes.DECIMAL,
    descuento: DataTypes.DECIMAL,
    impuesto: DataTypes.DECIMAL,
    totalGeneral: DataTypes.DECIMAL,
    totalDescuento: DataTypes.DECIMAL,
    origen: DataTypes.STRING,
    formaPago: DataTypes.STRING,
    formaEntrega: DataTypes.STRING  
  }, {
    sequelize,
    modelName: 'Venta',
  });
  return Venta;
};