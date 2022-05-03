'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prospecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prospecto.belongsTo(models.Articulo, {
        foreignKey: 'articuloId',
        as: 'articulo',
      });
    }
  };
  Prospecto.init({
    fecha: DataTypes.DATE,
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    vencimiento: DataTypes.DATE,
    nivel: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    observaciones: DataTypes.STRING,
    resultado: DataTypes.INTEGER,
    medidas: DataTypes.INTEGER,
    articuloId: DataTypes.INTEGER,
    gestion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prospecto',
  });
  return Prospecto;
};