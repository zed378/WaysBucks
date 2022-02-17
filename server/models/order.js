"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userId",
        },
      });

      order.belongsTo(models.product, {
        as: "order",
        foreignKey: {
          name: "productId",
        },
      });

      order.hasMany(models.transaction, {
        as: "transaction",
        foreignKey: {
          name: "orderId",
        },
      });

      order.belongsToMany(models.topping, {
        as: "topping",
        through: {
          model: "product_topping",
          as: "bridge",
        },
        foreignKey: "orderId",
      });
    }
  }
  order.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
