import React from "react";
import "./styles.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { openModalAddItem, setOpenModalAddItem, openModal, setOpenModal } =
    React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModalAddItem(!openModalAddItem);
    setOpenModal(!openModal);
  };

  return (
    <button className="createTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
