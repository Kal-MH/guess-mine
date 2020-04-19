import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsBoard");
const notifs = document.getElementById("jsNotif");

const addPlayer = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};
const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};
export const handlePlayerUpdate = ({ sockets }) => addPlayer(sockets);
export const handleGameStart = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
  enableChat();
};
export const handleLeaderNotif = ({ word }) => {
  disableChat();
  enableCanvas();
  showControls();
  setNotifs(`You are the leader, paint: ${word}`);
};
export const handleGameEnded = () => {
  setNotifs("Game Ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
};
export const handleGameStarting = () => {
  setNotifs("Game will start soon");
};
