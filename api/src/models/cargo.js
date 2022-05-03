'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cargo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cargo.belongsTo(models.Salario, {
        foreignKey: 'salarioId',
        as: 'salario',
      });
      Cargo.belongsTo(models.Sucursal, {
        foreignKey: 'sucursalId',
        as: 'sucursal',
      });
    }
  };
  Cargo.init({
    nombre: DataTypes.STRING,
    salarioId: DataTypes.INTEGER,
    sucursalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cargo',
  });
  return Cargo;
};