"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      income.belongsTo(models.transaction, {
        as: "transaction",
        foreignKey: {
          name: "transactionId",
        },
      });
    }
  }
  income.init(
    {
      transactionId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      attach: DataTypes.STRING,
      address: DataTypes.STRING,
      postcode: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "income",
    }
  );
  return income;
};
