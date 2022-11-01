import ReactDOM from "react-dom";
import React from "react";
import "./Modal.css";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="modalBackground" onClick={() => setOpenModal(false)}>
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
