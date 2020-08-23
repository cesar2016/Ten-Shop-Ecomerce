const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {      
    status: {
      type: DataTypes.ENUM("created", "processing", "cancelled", "complete"),
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.TEXT
    },    
  })
}