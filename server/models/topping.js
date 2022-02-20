"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class topping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      topping.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  topping.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      isClick: DataTypes.INTEGER,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "topping",
    }
  );
  return topping;
};
