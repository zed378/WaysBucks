const express = require("express");

const router = express.Router();

// import auth controller
const { login, register, checkAuth } = require("../controllers/auth");

// import user controller
const {
  getUsers,
  getUser,
  editUser,
  promoteUser,
  deleteUser,
} = require("../controllers/user");

// import product controller
const {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product");

// import topping controller
const {
  getToppings,
  getTopping,
  addTopping,
  editTopping,
  setClick,
  deleteTopping,
} = require("../controllers/topping");

// import transaction controller
// const {
//   getTransactions,
//   getTransaction,
//   addTransaction,
// } = require("../controllers/transaction");

// import middleware
const { auth } = require("../middlewares/auth");
const {
  profileImg,
  productImg,
  toppingImg,
  paymentImg,
} = require("../middlewares/uploads");

// define auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

// define user routes
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", auth, profileImg("photo"), editUser);
router.patch("/promote/:id", auth, promoteUser);
router.delete("/user/:id", auth, deleteUser);

// define product routes
router.get("/products", getProducts);
router.get("/product/:id", auth, getProduct);
router.post("/product", auth, productImg("thumbnail"), addProduct);
router.patch("/product/:id", auth, productImg("thumbnail"), editProduct);
router.delete("/product/:id", auth, deleteProduct);

// define topping routes
router.get("/toppings", getToppings);
router.get("/topping/:id", auth, getTopping);
router.post("/topping", auth, toppingImg("thumbnail"), addTopping);
router.patch("/topping/:id", auth, toppingImg("thumbnail"), editTopping);
router.patch("/setClick/:idTop/:click", auth, setClick);
router.delete("/topping/:id", auth, deleteTopping);

// define transaction routes
// router.get("/transactions", auth, getTransactions);
// router.get("/transaction/:id", auth, getTransaction);
// router.post("/transaction", auth, addTransaction);
// router.post("/order", auth, addOrder);

module.exports = router;
