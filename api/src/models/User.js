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
    address: {
      type: DataTypes.STRING,
      allowNull: true,        
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    type: {
      type: DataTypes.ENUM("1", "2"),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    }   
  });
};