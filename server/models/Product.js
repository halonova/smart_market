const Product = (sequelize, DataTypes) => {
  return sequelize.define('Product', {
    //id: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    isWishlist: DataTypes.BOOLEAN,
    isCart: DataTypes.BOOLEAN,
  });
};

module.exports = Product;
