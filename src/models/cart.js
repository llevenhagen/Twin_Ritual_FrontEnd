module.exports = (sequelize, DataTypes) => {
  const merch = sequelize.define('merch', {
    merchId: DataTypes.INT,
    userId: DataTypes.INT
  })
  return cart
}
