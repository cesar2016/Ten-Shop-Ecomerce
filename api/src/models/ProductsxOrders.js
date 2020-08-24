const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("productsxorders", {      
    amount: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.INTEGER
    },

  })

/* const queryInterface = sequelize.getQueryInterface();
queryInterface.addColumn('productsxorders','amountt',{type: DataTypes.INTEGER}) 

 */
}