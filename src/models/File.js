
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define("File", {
    filename: DataTypes.STRING,
    mimetype: DataTypes.STRING,
    encoding: DataTypes.STRING,
    path: DataTypes.STRING
  })

  return File;
}