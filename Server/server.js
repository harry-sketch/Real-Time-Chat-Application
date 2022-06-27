const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const port = 5000 || process.env.PORT;
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", () => {
  console.log("new connection");
});

app.get("/", (req, res) => {
  res.status(200).send("It's working");
});

server.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`);
});
