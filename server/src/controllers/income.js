// import model
const { income, transaction } = require("../../models");

exports.getIncomes = async (req, res) => {
  try {
    let data = await income.findAll({
      include: {
        model: transaction,
        as: "transaction",
        attributes: {
          exclude: [
            "userId",
            "productId",
            "toppingId",
            "qty",
            "createdAt",
            "updatedAt",
          ],
        },
      },

      order: [["id", "DESC"]],

      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = data.map((item) => {
      return {
        ...item,
        attach: process.env.PAYMENT_PATH + item.attach,
      };
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

exports.addIncome = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const { name, email, phone, address, postcode } = req.body;

    const data = await income.create({
      transactionId,
      name,
      email,
      phone,
      address,
      postcode,
      attach: req.file.filename,
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
