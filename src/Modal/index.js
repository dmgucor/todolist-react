import ReactDOM from "react-dom";
import React from "react";
import "./Modal.css";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
  const { setOpenModal, setOpenModalDeleteItem, setOpenModalAddItem } =
    React.useContext(TodoContext);

  const onClickExitModal = () => {
    setOpenModal(false);
    setOpenModalDeleteItem(false);
    setOpenModalAddItem(false);
  };

  return ReactDOM.createPortal(
    <div className="modalBackground" onClick={onClickExitModal}>
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
