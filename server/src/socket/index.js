const { chat, user } = require("../../models");

const socketIo = (io) => {
  io.on("connection", async (socket) => {
    console.log("client connect: ", socket.id);

    socket.on("load admin contact", async () => {
      try {
        let adminContact = await user.findOne({
          where: { isAdmin: 1 },

          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        });

        adminContact = JSON.parse(JSON.stringify(adminContact));
        adminContact.photo = process.env.PHOTO_PATH + adminContact.photo;

        socket.emit("admin contact", adminContact);
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("load customer contacts", async () => {
      try {
        let customers = await user.findAll({
          where: { isAdmin: 0 },

          include: [
            {
              model: chat,
              as: "recipientMessage",
              attributes: {
                exclude: ["createdAt", "updatedAt", "idRecipient", "idSender"],
              },
            },

            {
              model: chat,
              as: "senderMessage",
              attributes: {
                exclude: ["createdAt", "updatedAt", "idRecipient", "idSender"],
              },
            },
          ],

          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        });

        customers = JSON.parse(JSON.stringify(customers));
        customers = customers.map((item) => ({
          ...item,
          photo: process.env.PHOTO_PATH + item.photo,
        }));

        socket.emit("customer contacts", customers);
      } catch (err) {
        console.log(err);
      }
    });

    socket.on("disconnect", () => {
      console.log("client disconnected", socket.id);
    });
  });
};

module.exports = socketIo;
