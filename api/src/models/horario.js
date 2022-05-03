'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Horario.init({
    nombre: DataTypes.STRING,
    d1: DataTypes.STRING,
    d2: DataTypes.STRING,
    d3: DataTypes.STRING,
    d4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Horario',
  });
  return Horario;
};