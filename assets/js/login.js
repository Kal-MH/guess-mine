import { initSocket } from "./sockets";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const handleFormSubmit = (event) => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  localStorage.setItem(NICKNAME, value);
  input.value = "";
  logIn(value);
};

const logIn = (nickname) => {
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  initSocket(socket);
  body.className = LOGGED_IN;
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}

if (nickname == null) {
  body.className = LOGGED_OUT;
} else {
  logIn(nickname);
}
