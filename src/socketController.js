import events from "./events";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.broadcast.emit(events.newUser, { nickname });
    socket.nickname = nickname;
    console.log(nickname);
  });
};

export default socketController;
