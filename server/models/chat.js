"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chat.belongsTo(models.user, {
        as: "sender",
        foreignKey: {
          name: "senderId",
        },
      });

      chat.belongsTo(models.user, {
        as: "recipient",
        foreignKey: {
          name: "recipientId",
        },
      });
    }
  }
  chat.init(
    {
      message: DataTypes.TEXT,
      senderId: DataTypes.INTEGER,
      recipientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "chat",
    }
  );
  return chat;
};
