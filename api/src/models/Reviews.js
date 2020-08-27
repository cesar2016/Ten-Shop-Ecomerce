const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('reviews', {    
    rating: {
      type: DataTypes.STRING,
      allowNull: true,        
    },
    visited: {
        type: DataTypes.STRING,
        allowNull:false
    },
    comments: {
      type: DataTypes.STRING,
      allowNull:false
  } 
  });
};