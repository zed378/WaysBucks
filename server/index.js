// import modules and package
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./src/routes/");
const http = require("http");
const { Server } = require("socket.io");

// init app
const app = express();
app.use(express.json());
app.use(cors());

// init socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
require("./src/socket")(io);

// register upload paths
app.use("/uploads", express.static("uploads"));

// Add endpoint grouping and router
app.use("/api/v1/", router);

const port = 5000;

server.listen(port, () => console.debug(`Server running on port: ${port}`));
