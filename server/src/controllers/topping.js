// import model
const { topping, user } = require("../../models");

// import package
const fs = require("fs");
const path = require("path");

exports.getToppings = async (req, res) => {
  try {
    let toppings = await topping.findAll({
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
      attributes: {
        exclude: ["userId", "createdAt", "updatedAt"],
      },
    });

    toppings = JSON.parse(JSON.stringify(toppings));

    toppings = toppings.map((item) => {
      return {
        ...item,
        thumbnail: process.env.TOPPING_PATH + item.thumbnail,
      };
    });

    res.send({
      status: "Success",
      data: toppings,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.getTopping = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await topping.findOne({
      where: { id },

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

      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    data.thumbnail = process.env.TOPPING_PATH + data.thumbnail;

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

exports.addTopping = async (req, res) => {
  try {
    const { title, price } = req.body;

    let data = await topping.create({
      userId: req.user.id,
      title,
      price,
      thumbnail: req.file.filename,
    });

    data.thumbnail = process.env.TOPPING_PATH + data.thumbnail;

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

exports.editTopping = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      title: req.body.title,
      price: req.body.price,
      thumbnail: req.file.filename,
    };

    let checkTopping = await topping.findOne({
      where: { id },
    });

    if (!checkTopping) {
      return res.send({
        message: "Failed to delete",
      });
    } else {
      delImg(checkTopping.thumbnail);

      await topping.update(data, {
        where: { id },
      });
    }

    data.thumbnail = process.env.TOPPING_PATH + data.thumbnail;

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

exports.setClick = async (req, res) => {
  try {
    const { idTop, click } = req.params;
    await topping.update(
      {
        isClick: click,
      },
      {
        where: { id: idTop },
      }
    );
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.deleteTopping = async (req, res) => {
  try {
    const { id } = req.params;

    let checkTopping = await topping.findOne({
      where: { id },
    });

    if (!checkTopping) {
      return res.send({
        message: "Failed to delete",
      });
    } else {
      delImg(checkTopping.thumbnail);

      await topping.destroy({
        where: { id },
      });
    }

    res.send({
      status: "Success",
      message: "Success delete topping",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

const delImg = (filePath) => {
  filePath = path.join(__dirname, "../../uploads/topping/", filePath);

  fs.unlink(filePath, (err) => {
    if (err) throw err;
  });
};
