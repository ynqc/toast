import React from "react";
import ToastContent from "./ToastContent";
import ToastContainer from "./ToastContainer";

class Toast {
  static info(msg, time, onClose, opacity) {
    ToastContainer.setView(
      <ToastContent message={msg} time={time}
        opacity={opacity} onClose={onClose}
        onDismiss={() => {ToastContainer.setView();}} />
    );
  }
  static hide() {
    ToastContainer.setView();
  }
}
export default Toast;