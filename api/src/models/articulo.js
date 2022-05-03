'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Articulo.belongsTo(models.Categoria, {
        foreignKey: 'categoriaId',
        as: 'categoria',
      });
      Articulo.belongsTo(models.Marca, {
        foreignKey: 'marcaId',
        as: 'marca',
      });
      Articulo.belongsTo(models.Unidad, {
        foreignKey: 'unidadId',
        as: 'unidad',
      });
     
    }
  };
  Articulo.init({
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    codigoBarras: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },	  
    estado: DataTypes.BOOLEAN,
    nombre: DataTypes.STRING,    
    nombreCorto: DataTypes.STRING,	  
    tipo: DataTypes.STRING,
    medida: DataTypes.STRING,
    volumen: DataTypes.STRING,
    peso: DataTypes.STRING,
    descripcion: DataTypes.STRING,	  
    industria: DataTypes.STRING,	  
    inCatalogo: DataTypes.BOOLEAN,
    inOferta: DataTypes.BOOLEAN,	  
    precioCosto: DataTypes.DECIMAL,
    precioVenta: DataTypes.DECIMAL,
    precioOferta: DataTypes.DECIMAL,
    pGanancia: DataTypes.DECIMAL,
    impuestoIva: DataTypes.DECIMAL,
    impuestoIt: DataTypes.DECIMAL,
    pServicio: DataTypes.INTEGER,
    stockMinimo: DataTypes.INTEGER,
    stockTiempo: DataTypes.INTEGER,
    origen: DataTypes.STRING,	  
    filename: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
    marcaId: DataTypes.INTEGER,
    unidadId: DataTypes.INTEGER,
    modelo: DataTypes.STRING,    
    sma: DataTypes.INTEGER,
    te: DataTypes.INTEGER,
    cp: DataTypes.INTEGER,
    ter: DataTypes.INTEGER,
    smi: DataTypes.INTEGER,
    ss: DataTypes.INTEGER,
    ms: DataTypes.INTEGER,
    pr: DataTypes.INTEGER,
    nm: DataTypes.STRING,
    nv: DataTypes.STRING,
    subcategoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Articulo',
  });
  return Articulo;
};
