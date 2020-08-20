const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {      
    status: {
      type: DataTypes.ENUM("created", "processing", "cancelled", "complete"),
    },
    address: {
      type: DataTypes.TEXT
    },    
  })
}