import React from "react";
import "./styles.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { setOpenModalAddItem, setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModalAddItem(true);
    setOpenModal(true);
  };

  return (
    <button className="createTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
