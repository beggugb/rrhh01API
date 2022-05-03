'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contrato.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'persona',
      });
      Contrato.belongsTo(models.Horario, {
        foreignKey: 'horarioId',
        as: 'horario',
      });
      Contrato.belongsTo(models.Salario, {
        foreignKey: 'salarioId',
        as: 'salario',
      });
      Contrato.belongsTo(models.Cargo, {
        foreignKey: 'cargoId',
        as: 'cargo',
      });
    }
  };
  Contrato.init({
    nro: DataTypes.STRING,
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
    plazo: DataTypes.STRING,
    contratado: DataTypes.BOOLEAN,
    observaciones: DataTypes.STRING,
    person: DataTypes.STRING,
    personaId: DataTypes.INTEGER,
    horarioId: DataTypes.INTEGER,
    salarioId: DataTypes.INTEGER,
    cargoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contrato',
  });
  return Contrato;
};