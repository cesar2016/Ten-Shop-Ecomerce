const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    type: {
      type: DataTypes.ENUM("1", "2", "3"),
      allowNull: false,
    }
  });
};