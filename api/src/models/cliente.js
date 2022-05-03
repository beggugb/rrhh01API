'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cliente.init({    
    nombres: DataTypes.STRING,
    direccion: DataTypes.STRING,
    tipo: DataTypes.STRING,
    nit: DataTypes.STRING,
    nombreNit: DataTypes.STRING,
    estado: DataTypes.STRING,
    filename: DataTypes.STRING,
    telefono: DataTypes.STRING,
    codigo: DataTypes.STRING,
    pais: DataTypes.STRING,	  
    ciudad: DataTypes.STRING,	  
    email: DataTypes.STRING,
    web: DataTypes.STRING,	  
    observaciones: DataTypes.STRING,
    codpostal: DataTypes.STRING,    
    tipoInteres:DataTypes.STRING,
    filenameNit: DataTypes.STRING,
    filenameCi: DataTypes.STRING,
    grupo: DataTypes.STRING,
    personaContacto: DataTypes.STRING,
    cuentaBancario: DataTypes.STRING,
    celular: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};
