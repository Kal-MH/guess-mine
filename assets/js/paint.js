import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const controls = document.getElementById("jsControls");
const mode = document.getElementById("jsMode");
const colors = document.getElementsByClassName("jsColor");

const ctx = canvas.getContext("2d");
const CANVAS_SIZE = 700;
const INITIAL_COLOR = "#2c2c2c";

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const startPainting = () => (painting = true);
const stopPainting = () => (painting = false);
const handleCM = (event) => event.preventDefault();
const fill = (color = null) => {
  let currentColor = ctx.fillStyle;
  if (color) {
    ctx.fillStyle = color;
  }
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};
const handleCanvasClick = () => {
  if (filling) {
    fill();
    getSocket().emit(window.events.fill, { color: ctx.fillStyle });
  }
};
const beginPath = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};
const strokePath = (x, y, color = null) => {
  let currentColor = ctx.strokeStyle;
  if (color) {
    ctx.strokeStyle = color;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};
const onMouseMove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    beginPath(x, y);
    getSocket().emit(window.events.beginPath, { x, y });
  } else {
    strokePath(x, y);
    getSocket().emit(window.events.strokePath, {
      x,
      y,
      color: ctx.strokeStyle,
    });
  }
};
const handleModeClick = () => {
  if (filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};
const handleColorClick = (event) => {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};
export const enableCanvas = () => {
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("click", handleCanvasClick);
};
export const disableCanvas = () => {
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("click", handleCanvasClick);
};
export const hideControls = () => (controls.style.display = "none");
export const showControls = () => (controls.style.display = "block");

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y, color }) => strokePath(x, y, color);
export const handleFilled = ({ color }) => fill(color);
export const resetCanvas = () => fill("#fff");
if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
  hideControls();
}
if (mode) {
  mode.addEventListener("click", handleModeClick);
}
Array.from(colors).forEach((color) => {
  color.addEventListener("click", handleColorClick);
});
