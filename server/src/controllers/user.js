// import model
const { user } = require("../../models");

// import package
const fs = require("fs");
const path = require("path");

exports.getUsers = async (req, res) => {
  try {
    let users = await user.findAll({
      where: { isAdmin: 0 },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    users = JSON.parse(JSON.stringify(users));

    users = users.map((item) => {
      return {
        ...item,
        photo: process.env.PHOTO_PATH + item.photo,
      };
    });

    res.send({
      status: "Success",
      data: users,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;

    let find = await user.findOne({
      where: { id },

      attributes: {
        exclude: ["password", "updatedAt"],
      },
    });

    find.photo = process.env.PHOTO_PATH + find.photo;

    res.send({
      status: "Success",
      data: find,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;

    const data = {
      name: req.body.name,
      photo: req.file.filename,
    };

    let checkUser = await user.findOne({
      where: { id },
    });

    if (!checkUser) {
      return res.send({
        message: "Failed to delete",
      });
    } else {
      delImg(checkUser.photo);

      await user.update(data, {
        where: { id },
      });
    }

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

exports.promoteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      isAdmin: 1,
    };

    await user.update(data, { where: { id } });

    res.send({
      status: "Success",
      message: "Promote Success",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    let checkUser = await user.findOne({
      where: { id },
    });

    if (!checkUser) {
      return res.send({
        message: "Failed to delete",
      });
    } else {
      delImg(checkUser.photo);

      await user.destroy({
        where: { id },
      });
    }

    res.send({
      status: "Success",
      message: "Delete User Success",
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

const delImg = (filePath) => {
  if (filePath !== "default.svg") {
    filePath = path.join(__dirname, "../../uploads/profile/", filePath);

    fs.unlink(filePath, (err) => {
      if (err) throw err;
    });
  }
};
