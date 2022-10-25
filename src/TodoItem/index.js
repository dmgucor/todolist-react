import React from "react";
import "./styles.css";

function TodoItem({ item, onComplete, onDelete }) {
  const onCompleteClicked = () => {
    onComplete();
  };

  const onDeleteClicked = () => {
    onDelete();
  };

  return (
    <div
      className={`todoCard ${
        item.completed === true ? "todoCardCompleted" : "todoCardPending"
      }`}
    >
      <p>{item.text}</p>
      <div className="actionIcons">
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
