import { handleNewUser, handleDisconnect } from "./notification";
import { handleNewMsg } from "./chat";
import { handleBeganPath, handleStrokedPath, handleFilled } from "./paint";
import {
  handlePlayerUpdate,
  handleGameStart,
  handleLeaderNotif,
  handleGameEnded,
  handleGameStarting,
} from "./player";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (aSocket) => (socket = aSocket);
export const initSocket = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket);
  socket = aSocket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconneted, handleDisconnect);
  socket.on(events.newMsg, handleNewMsg);
  socket.on(events.beganPath, handleBeganPath);
  socket.on(events.strokedPath, handleStrokedPath);
  socket.on(events.filled, handleFilled);
  socket.on(events.playerUpdate, handlePlayerUpdate);
  socket.on(events.gameStarted, handleGameStart);
  socket.on(events.leaderNotif, handleLeaderNotif);
  socket.on(events.gameEnded, handleGameEnded);
  socket.on(events.gameStarting, handleGameStarting);
};
