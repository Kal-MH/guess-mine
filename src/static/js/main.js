(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUMvQkMsT0FEK0IsR0FDVEQsSUFEUyxDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsUUFEc0IsR0FDVEYsSUFEUyxDQUN0QkUsUUFEc0I7QUFFdkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZihkYXRhKSB7XHJcbiAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcclxuICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX06ICR7bWVzc2FnZX1gKTtcclxufVxyXG4iXX0=
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

function sendMessage(message) {
  console.log("You: ".concat(message));
  socket.emit("newMessage", {
    message: message
  });
}

function sendNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZDZmOTk5NWMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsInNlbmROaWNrbmFtZSIsIm5pY2tuYW1lIiwib24iLCJoYW5kbGVNZXNzYWdlTm90aWYiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkYsT0FBcEI7QUFDQUgsRUFBQUEsTUFBTSxDQUFDTSxJQUFQLENBQVksWUFBWixFQUEwQjtBQUFFSCxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBMUI7QUFDRDs7QUFFRCxTQUFTSSxZQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUM5QlIsRUFBQUEsTUFBTSxDQUFDTSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFRSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDRDs7QUFFRFIsTUFBTSxDQUFDUyxFQUFQLENBQVUsY0FBVixFQUEwQkMsd0JBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTWVzc2FnZU5vdGlmIH0gZnJvbSBcIi4vY2hhdFwiO1xyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcclxuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTmlja25hbWUobmlja25hbWUpIHtcclxuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XHJcbn1cclxuXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZlwiLCBoYW5kbGVNZXNzYWdlTm90aWYpO1xyXG4iXX0=
},{"./chat":1}]},{},[2])