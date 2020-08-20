const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("productsxorder", {
    amount: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.INTEGER
    }
  })
}