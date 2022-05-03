'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CotizacionItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CotizacionItem.belongsTo(models.Cotizacion, {
        foreignKey: 'cotizacionId',
        as: 'cotizacion',
      });
      CotizacionItem.belongsTo(models.Articulo, {
        foreignKey: 'articuloId',
        as: 'articulo',
      });
    }
  };
  CotizacionItem.init({
    cantidad: DataTypes.INTEGER,
    codigo: DataTypes.STRING,
    cotizacionId: DataTypes.INTEGER,
    articuloId: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    categoria: DataTypes.STRING,
    marca: DataTypes.STRING,
    subTotal: DataTypes.DECIMAL,
    unidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CotizacionItem',
  });
  return CotizacionItem;
};