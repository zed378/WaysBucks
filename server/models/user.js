"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.product, {
        as: "products",
        foreignKey: {
          name: "userId",
        },
      });

      user.hasMany(models.topping, {
        as: "toppings",
        foreignKey: {
          name: "userId",
        },
      });

      user.hasMany(models.transaction, {
        as: "transactions",
        foreignKey: {
          name: "userId",
        },
      });

      user.hasMany(models.chat, {
        as: "senderMessage",
        foreignKey: {
          name: "senderId",
        },
      });

      user.hasMany(models.chat, {
        as: "recipientMessage",
        foreignKey: {
          name: "recipientId",
        },
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.INTEGER,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
