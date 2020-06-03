'use strict';

module.exports = (sequelize, DataTypes) => {

  const Ingredient = sequelize.define("Ingredient", {
    name: DataTypes.STRING,
    file_id: DataTypes.INTEGER
  })

  return Ingredient;
}
