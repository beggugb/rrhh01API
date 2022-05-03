'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Registro.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'persona',
      });
      Registro.belongsTo(models.Contrato, {
        foreignKey: 'contratoId',
        as: 'contrato',
      });
    }
  };
  Registro.init({
    fecha: DataTypes.DATE,
    mes: DataTypes.DATE,
    hora: DataTypes.DATE,
    minutos: DataTypes.DATE,
    dia: DataTypes.STRING,
    monto: DataTypes.NUMERIC,
    descuento: DataTypes.DECIMAL,
    personaId: DataTypes.INTEGER,
    contratoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Registro',
  });
  return Registro;
};