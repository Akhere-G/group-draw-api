const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();

const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket) => {
  console.log("here", socket.id);

  socket.on("add_shape", () => {
    console.log("addShape");
  });

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
  });
});

const PORT = 8000;
server.listen(8000, () => console.log(`Listening on port :${PORT}`));
