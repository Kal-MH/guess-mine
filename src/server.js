import express from "express";
import { join } from "path";
import soketIO from "socket.io";
import morgan from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;

const app = express();

const handleListening = () => {
  console.log(`Listening : http://localhost:${PORT}`);
};

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home", { events: JSON.stringify(events) });
});

const server = app.listen(PORT, handleListening);
const io = soketIO.listen(server);

io.on("connection", (socket) => {
  socketController(socket);
});
