'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovimientoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MovimientoItem.belongsTo(models.Movimiento, {
        foreignKey: 'movimientoId',
        as: 'movimiento',
      });
      MovimientoItem.belongsTo(models.Articulo, {
        foreignKey: 'articuloId',
        as: 'articulo',
      });
    }
  };
  MovimientoItem.init({
    cantidad: DataTypes.INTEGER,
    codigo: DataTypes.STRING,
    articuloId: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    movimientoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovimientoItem',
  });
  return MovimientoItem;
};