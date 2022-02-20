// import model
const { transaction, user, order } = require("../../models");

exports.getTransactions = async (req, res) => {
  try {
    let data = await transaction.findAll({
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: [
            "id",
            "password",
            "isAdmin",
            "photo",
            "createdAt",
            "updatedAt",
          ],
        },
      },

      include: {
        model: order,
        as: "order",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },

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

      include: [
        {
          model: user,
          as: "user",
          attributes: {
            exclude: [
              "id",
              "password",
              "isAdmin",
              "photo",
              "createdAt",
              "updatedAt",
            ],
          },
        },

        {
          model: order,
          as: "order",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],

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

exports.getUserTransaction = async (req, res) => {
  try {
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};
