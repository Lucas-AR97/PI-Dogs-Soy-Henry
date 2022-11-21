const { DataTypes } = require('sequelize');
// Exportamos una función que define el modelo
// Luego le injertamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    weight: {
      type: DataTypes.JSON,
    },
    height: {
      type: DataTypes.JSON,
    },
    bred_for: {
      type: DataTypes.STRING,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.JSON,
    },
  });
};
