import React from "react";
import "./styles.css";
import { TodoContext } from "../TodoContext";

function TodoItem({ item, onComplete }) {
  const { setOpenModalDeleteItem, setOpenModal, setTodoToDelete } =
    React.useContext(TodoContext);

  const onCompleteClicked = () => {
    onComplete();
  };

  const onDeleteClicked = () => {
    setOpenModal(true);
    setOpenModalDeleteItem(true);
    setTodoToDelete(item.text);
  };

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`todoCard ${
        item.completed === true ? "todoCardCompleted" : "todoCardPending"
      }`}
      onClick={onCompleteClicked}
    >
      <p>{item.text}</p>
      <div className="actionIcons" onClick={(e) => handleChildElementClick(e)}>
        <span
          className="material-symbols-outlined deleteIcon"
          onClick={onDeleteClicked}
        >
          delete
        </span>
        {item.completed === true ? (
          <span
            className="material-symbols-outlined"
            onClick={onCompleteClicked}
          >
            task_alt
          </span>
        ) : (
          <span
            className="material-symbols-outlined"
            onClick={onCompleteClicked}
          >
            radio_button_unchecked
          </span>
        )}
      </div>
    </div>
  );
}

export { TodoItem };
