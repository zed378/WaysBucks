'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_topping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_topping.init({
    orderId: DataTypes.INTEGER,
    toppingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_topping',
  });
  return product_topping;
};