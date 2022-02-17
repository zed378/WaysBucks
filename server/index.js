// import modules and package
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./src/routes/");

// init app
const app = express();
app.use(express.json());
app.use(cors());

// register upload paths
app.use("/uploads", express.static("uploads"));

// Add endpoint grouping and router
app.use("/api/v1/", router);

const port = 5000;

app.listen(port, () => console.debug(`Server running on port: ${port}`));
