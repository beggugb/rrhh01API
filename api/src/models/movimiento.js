'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movimiento.belongsTo(models.Compra, {
        foreignKey: 'compraId',
        as: 'compra',
      });
      Movimiento.belongsTo(models.Venta, {
        foreignKey: 'ventaId',
        as: 'venta',
      });
      Movimiento.belongsTo(models.Almacen, {
        foreignKey: 'almacenId',
        as: 'almacen',
      });
      Movimiento.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario',
      });
    }
  };
  Movimiento.init({
    origen: DataTypes.STRING,
    destino: DataTypes.STRING,
    tipo: DataTypes.STRING,
    fecha: DataTypes.DATE,
    compraId: DataTypes.INTEGER,
    ventaId: DataTypes.INTEGER,
    almacenId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    nroItems: DataTypes.INTEGER,
    gestion: DataTypes.INTEGER,
    mes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movimiento',
  });
  return Movimiento;
};