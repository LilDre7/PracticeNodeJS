const { DataTypes } = require("sequelize");
const { DB } = require("../db/config");

const products = DB.define("Products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Product description",
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 1000,
      isDecimal: true,
    },
  },
});

module.exports = products;
