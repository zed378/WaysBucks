const { user } = require("../../models");

exports.getUsers = async (req, res) => {
  try {
    let users = await user.findAll({
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
        exclude: ["password", "createdAt", "updatedAt"],
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

    const data = req.body;

    await user.update(data, {
      where: { id },
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

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await user.destroy({
      where: { id },
    });

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
