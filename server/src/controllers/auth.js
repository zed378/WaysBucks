// import model
const { user } = require("../../models");

// import module
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  // define input rules and validate with JOI
  const input = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  // validate input
  const { error } = input.validate(req.body);

  // check if error
  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    const { email, password, name } = req.body;

    // define hash spinning key
    const spinKey = await bcrypt.genSalt(10);

    // ecrypt password before store to database
    const encryptPass = await bcrypt.hash(password, spinKey);

    // validate email if registered
    const checkUser = await user.findOne({
      where: {
        email,
      },
    });

    // validate condition before add new user
    if (!checkUser) {
      await user.create({
        name,
        email,
        password: encryptPass,
      });
    } else {
      res.status(400).send({
        status: "Registered",
        message: "Email Already Registered",
      });
      return;
    }

    // define token data
    const dataToken = {
      id: user.id,
      email: user.email,
    };

    // generate token
    const token = jwt.sign(dataToken, process.env.TOKEN_KEY);

    res.status(200).send({
      status: "Success",
      message: "Account Created",
      data: {
        user: {
          name,
          email,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  // define input rules and validate with JOI
  const input = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  // check if input error
  const { error } = input.validate(req.body);

  // if error exist send validation error message
  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    const { email, password } = req.body;
    const userExist = await user.findOne({
      where: {
        email,
      },
    });

    // init var to decrypt password
    const isMatch = await bcrypt.compare(password, userExist.password);

    // check if password didn't match
    if (!isMatch) {
      return res.status(400).send({
        status: "Failed",
        message: "Email or Password doesn't match",
      });
    }

    // define token data
    const dataToken = {
      id: userExist.id,
      email: userExist.email,
      name: userExist.fullName,
      isAdmin: userExist.isAdmin,
      photo: process.env.PHOTO_PATH + userExist.photo,
    };

    // generate token
    const token = jwt.sign(dataToken, process.env.TOKEN_KEY);

    res.status(200).send({
      status: "Success",
      message: "Login Success",
      data: {
        fullName: userExist.fullName,
        email: userExist.email,
        isAdmin: userExist.isAdmin,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    const id = req.user.id;

    const dataUser = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "Failed",
      });
    }

    res.send({
      status: "Success",
      data: {
        user: {
          id: dataUser.id,
          name: dataUser.name,
          email: dataUser.email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};