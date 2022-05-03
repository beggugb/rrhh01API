'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TicketItem.belongsTo(models.Ticket, {
        foreignKey: 'ticketId',
        as: 'ticket',
      });
    }
  };
  TicketItem.init({
    fecha: DataTypes.DATE,
    descripcion: DataTypes.STRING,
    ticketId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TicketItem',
  });
  return TicketItem;
};