'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstudiosPersona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EstudiosPersona.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'persona',
      });
    
    }
  };
  EstudiosPersona.init({
    carrera: DataTypes.STRING,
    fecha: DataTypes.DATE,
    ciudad: DataTypes.STRING,
    pais: DataTypes.STRING,
    nivel: DataTypes.STRING,
    estado: DataTypes.STRING,
    institucion: DataTypes.STRING,
    personaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EstudiosPersona',
  });
  return EstudiosPersona;
};