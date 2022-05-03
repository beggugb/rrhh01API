'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Persona.init({
    nombres: DataTypes.STRING,
    materno: DataTypes.STRING,
    paterno: DataTypes.STRING,
    direccion: DataTypes.STRING,
    email: DataTypes.STRING,
    ci: DataTypes.STRING,
    telefono: DataTypes.STRING,
    celular: DataTypes.STRING,
    pais: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};