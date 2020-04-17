import { handleMessageNotif } from "./chat";

const socket = io("/");

function sendMessage(message) {
  console.log(`You: ${message}`);
  socket.emit("newMessage", { message });
}

function sendNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif);
