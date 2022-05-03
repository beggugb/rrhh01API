'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProspectoItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProspectoItems.belongsTo(models.ProspectoCliente, {
        foreignKey: 'cprospectoId',
        as: 'prospectocliente',
      });
    }
  };
  ProspectoItems.init({
    fecha: DataTypes.DATE,
    tipo: DataTypes.STRING,
    detalle: DataTypes.STRING,
    cprospectoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProspectoItems',
  });
  return ProspectoItems;
};