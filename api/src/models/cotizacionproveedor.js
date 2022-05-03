'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CotizacionProveedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CotizacionProveedor.belongsTo(models.Compra, {
        foreignKey: 'compraId',
        as: 'compra',
      });
      CotizacionProveedor.belongsTo(models.Proveedor, {
        foreignKey: 'proveedorId',
        as: 'proveedor',
      });
    }
  };
  CotizacionProveedor.init({
    filename: DataTypes.STRING,
    fecha: DataTypes.DATE,
    compraId: DataTypes.INTEGER,
    proveedorId: DataTypes.INTEGER,
    razonSocial: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CotizacionProveedor',
  });
  return CotizacionProveedor;
};