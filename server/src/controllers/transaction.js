// import model
const { transaction, user, product, topping } = require("../../models");

exports.getTransactions = async (req, res) => {
  try {
    let data = await transaction.findAll({
      attributes: {
        exclude: ["createdAt", "UpdatedAt"],
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.getTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await transaction.findOne({
      where: { id },

      attributes: {
        exclude: ["createdAt", "UpdatedAt"],
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.addTransaction = async (req, res) => {
  try {
    const { prodId, topId, qty, total } = req.params;

    const data = {
      userId: req.user.id,
      productId: prodId,
      toppingId: topId,
      total: total,
      qty: qty,
    };

    await transaction.create(data);

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.editTransaction = async (req, res) => {
  try {
    const { id, status } = req.params;

    await transaction.update({ status }, { where: { id } });

    res.send({
      status: "Success",
      message: "Update Success",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    await transaction.destroy({ where: { id } });

    res.send({
      status: "Success",
      message: "Delete Success",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.getUserTransactions = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await transaction.findAll({ where: { userId } });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.basket = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await transaction.findAll({
      where: {
        userId,
        status: "pending" || "otw",
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};
