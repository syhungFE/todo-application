import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ToastContext } from "../use-toast";
import "react-toastify/dist/ReactToastify.css";

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};
export const ToastProvider = (props) => {
  const {
    type = toast.TYPE.DEFAULT,
    position = toast.POSITION.TOP_RIGHT,
    theme = "colored",
    children
  } = props;

  const show = (message) => {
    toast(message.text, {
      type: message.type || type,
      position: position,
      theme: theme
    });
  };

  const error = (message) => {
    show({ type: toast.TYPE.ERROR, text: message });
  };

  const warn = (message) => {
    show({ type: toast.TYPE.WARNING, text: message });
  };

  const info = (message) => {
    show({ type: toast.TYPE.INFO, text: message });
  };

  const success = (message) => {
    show({ type: toast.TYPE.SUCCESS, text: message });
  };

  return (
    <ToastContext.Provider
      value={{
        error: error,
        warn: warn,
        info: info,
        success: success
      }}
    >
      {children}
      <ToastContainer limit={3} />
    </ToastContext.Provider>
  );
};
