import React from "react";
import ToastContent from "./ToastContent";
import ToastContainer from "./ToastContainer";

class Toast {
  static info(msg, time, onClose, opacity) {
    let message, duration, closeCallback, closeOpacity;
    if (typeof msg === "string" || (typeof msg === "number" && !isNaN(msg))) {
      message = msg;
      if (typeof time === "function") {
        duration = 3;
        closeCallback = time;
        if (typeof onClose === "number") {
          closeOpacity = onClose;
        } else {
          closeOpacity = 0;
        }
      } else if (typeof time === "number") {
        duration = time;
        if (typeof onClose === "function") {
          closeCallback = onClose;
          if (typeof opacity === "number") {
            closeOpacity = opacity;
          } else {
            closeOpacity = 0;
          }
        } else if (typeof onClose === "number") {
          closeOpacity = onClose;
          closeCallback = () => {};
        } else {
          closeCallback = () => {};
          closeOpacity = 0;
        }
      } else {
        duration = 3;
        closeCallback = () => {};
        closeOpacity = 0;
      }
    } else {
      message = "message required string type";
      duration = 3;
      closeCallback = () => {};
      closeOpacity = 0;
    }
    ToastContainer.setView(
      <ToastContent message={message} time={duration}
        opacity={closeOpacity} onClose={closeCallback}
        onDismiss={() => {ToastContainer.setView();}} />
    );
  }
  static hide() {
    ToastContainer.setView();
  }
}
export default Toast;