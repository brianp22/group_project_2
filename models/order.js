/* eslint-disable camelcase */
/* eslint-disable indent */

var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    drink_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    add_1: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    add_2: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    created_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  //   Order.associate = function (models) {
  //     models.Order.belongsTo(models.User, {
  //       foreignKey: {what Goes in here}
  //     });

  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  return Order;
};
