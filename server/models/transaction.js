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
        as: "user",
        foreignKey: "userId",
      });

      transaction.belongsTo(models.product, {
        as: "product",
        foreignKey: {
          name: "productId",
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
      status: DataTypes.STRING,
      qty: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return transaction;
};
