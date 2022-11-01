import React, { useState } from "react";
import "./style.css";
import { TodoContext } from "../TodoContext";

function ModalAddTodo() {
  const {
    openModalAddItem,
    setOpenModalAddItem,
    saveTodos,
    todos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [disable, setDisable] = useState(true);
  const onClickDisplayModal = () => {
    setOpenModal(!openModal);
    setOpenModalAddItem(!openModalAddItem);
  };

  const createTodo = () => {
    let newTodoText = document.getElementById("inputNewTodo").value;
    newTodoText = newTodoText.trim();
    if (newTodoText !== null) {
      const todoList = [...todos];
      const newTodo = { text: newTodoText, completed: false };
      todoList.push(newTodo);
      saveTodos(todoList);
      setOpenModalAddItem(false);
      setOpenModal(!openModal);
    }
  };

  const validateIsNewTodo = () => {
    const inputTodo = document.getElementById("inputNewTodo");
    let newTodoText = inputTodo.value;
    newTodoText = newTodoText.trim();

    if (newTodoText === "") {
      setDisable(true);
    } else {
      const existsInList = todos.filter((todo) => todo.text === newTodoText);
      if (existsInList.length > 0) {
        setDisable(true);
        inputTodo.setCustomValidity("This todo already exists");
        inputTodo.reportValidity();
      } else {
        setDisable(false);
        inputTodo.setCustomValidity("");
      }
    }
  };

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };

  return (
    <form onSubmit={createTodo} onClick={(e) => handleChildElementClick(e)}>
      <div className="modal" autoComplete="off">
        <h2>Add todo</h2>
        <div className="inputForm">
          <label htmlFor="inputNewTodo">What are you doing today?</label>
          <input
            placeholder="Chop onion"
            id="inputNewTodo"
            autoComplete="off"
            onChange={validateIsNewTodo}
          ></input>
        </div>
        <div className="buttonContainer">
          <input type="button" value={"Cancel"} onClick={onClickDisplayModal} />
          <button id="addTodoButton" disabled={disable}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export { ModalAddTodo };
