// import model
const { product, user } = require("../../models");

// import package
const fs = require("fs");
const path = require("path");

exports.getProducts = async (req, res) => {
  try {
    let data = await product.findAll({
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

    data = JSON.parse(JSON.stringify(data));

    data = data.map((item) => {
      return {
        ...item,
        thumbnail: process.env.PRODUCT_PATH + item.thumbnail,
      };
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await product.findOne({
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

    data.thumbnail = process.env.PRODUCT_PATH + data.thumbnail;

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { title, price } = req.body;

    let data = await product.create({
      userId: req.user.id,
      title,
      price,
      thumbnail: req.file.filename,
    });

    data.thumbnail = process.env.PRODUCT_PATH + data.thumbnail;

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

exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      title: req.body.title,
      price: req.body.price,
      thumbnail: req.file.filename,
    };

    let checkProduct = await product.findOne({
      where: { id },
    });

    if (!checkProduct) {
      return res.send({
        message: "Failed to delete",
      });
    } else {
      delImg(checkProduct.thumbnail);

      await product.update(data, {
        where: { id },
      });
    }

    data.thumbnail = process.env.PRODUCT_PATH + data.thumbnail;

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

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let checkProduct = await product.findOne({
      where: { id },
    });

    if (!checkProduct) {
      return res.send({
        message: "Failed to delete",
      });
    } else {
      delImg(checkProduct.thumbnail);

      await product.destroy({
        where: { id },
      });
    }

    res.send({
      status: "Success",
      message: "Success delete product",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

const delImg = (filePath) => {
  filePath = path.join(__dirname, "../../uploads/product/", filePath);

  fs.unlink(filePath, (err) => {
    if (err) throw err;
  });
};
