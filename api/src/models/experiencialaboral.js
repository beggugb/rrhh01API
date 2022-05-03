'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExperienciaLaboral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ExperienciaLaboral.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'persona',
      });
    }
  };
  ExperienciaLaboral.init({
    empresa: DataTypes.STRING,
    desde: DataTypes.DATE,
    hasta: DataTypes.DATE,
    ciudad: DataTypes.STRING,
    pais: DataTypes.STRING,
    motivo: DataTypes.STRING,
    contacto: DataTypes.STRING,
    telefono: DataTypes.STRING,
    personaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ExperienciaLaboral',
  });
  return ExperienciaLaboral;
};