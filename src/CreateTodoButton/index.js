import React from "react";
import "./styles.css";
function CreateTodoButton() {

  const onClickButton = () => alert('open modal');

  return (
    <button className="createTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
