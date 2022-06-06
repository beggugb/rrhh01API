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
      Registro.belongsTo(models.Departamento, {
        foreignKey: 'departamentoId',
        as: 'departamento',
      });
    }
  };
  Registro.init({
    fecha: DataTypes.DATE,    
    hora: DataTypes.STRING,
    minutos: DataTypes.STRING,
    dia: DataTypes.STRING,
    monto: DataTypes.NUMERIC,
    descuento: DataTypes.DECIMAL,
    personaId: DataTypes.INTEGER,
    departamentoId: DataTypes.INTEGER,
    contratoId: DataTypes.INTEGER,
    r1: DataTypes.STRING,    
    d1: DataTypes.DECIMAL,
    r2: DataTypes.STRING,
    d2: DataTypes.DECIMAL,
    r3: DataTypes.STRING,
    d3: DataTypes.DECIMAL,
    r4: DataTypes.STRING,
    d4: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Registro',
  });
  return Registro;
};