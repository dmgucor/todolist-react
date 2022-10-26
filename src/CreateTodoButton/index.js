import React from "react";
import "./styles.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => setOpenModal(!openModal);

  return (
    <button className="createTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
