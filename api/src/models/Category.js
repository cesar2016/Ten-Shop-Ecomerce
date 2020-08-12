const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
// Vincular User con Page
// Tu código acá:
// categories.hasMany(products);
// Page.belongsTo(User);
