'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tdc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tdc.init({
    monto: DataTypes.DECIMAL,    
    title: DataTypes.STRING,
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true
    },
    classNames: DataTypes.STRING,
    backgroundColor: DataTypes.STRING,
    detalle: DataTypes.STRING,
    selectable: DataTypes.BOOLEAN,    
    gestion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tdc',
  });
  return Tdc;
};