const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('users', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};