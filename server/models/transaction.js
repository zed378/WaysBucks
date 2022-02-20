"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user, {
        as: "transaction",
        foreignKey: {
          name: "userId",
        },
      });

      transaction.belongsTo(models.product, {
        as: "product",
        foreignKey: {
          name: "productId",
        },
      });

      transaction.belongsTo(models.topping, {
        as: "topping",
        foreignKey: {
          name: "toppingId",
        },
      });
    }
  }
  transaction.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      toppingId: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return transaction;
};
