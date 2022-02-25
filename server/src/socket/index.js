const socketIo = (io) => {
  io.on("connection", (socket) => {
    console.log("client connect:", socket.id);

    socket.io("disconnect", () => {
      console.log("client disconnect");
    });
  });
};

module.exports = socketIo;
