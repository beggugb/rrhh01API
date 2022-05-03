'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Empresa.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    web: DataTypes.STRING,
    email: DataTypes.STRING,
    filename: DataTypes.STRING,
    nit: DataTypes.STRING,
    registro: DataTypes.STRING,
    smtpHost: DataTypes.STRING,
    smtpUser: DataTypes.STRING,
    smtpPassword: DataTypes.STRING,
    smtpSecure: DataTypes.STRING,
    smtpPort: DataTypes.INTEGER,    
    labelCotizacion: DataTypes.STRING,
    garantiaCotizacion: DataTypes.STRING,
    politicaCotizacion: DataTypes.STRING,
    licencia: DataTypes.STRING,
    fechaLicencia: DataTypes.DATE,
    moneda: DataTypes.STRING,
    labelMoneda: DataTypes.STRING,
    pais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  return Empresa;
};