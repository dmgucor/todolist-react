import ReactDOM from "react-dom";
import React from "react";
import "./Modal.css";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
  const { openModal, setOpenModal, saveTodos, todos } =
    React.useContext(TodoContext);

  const onClickDisplayModal = () => setOpenModal(!openModal);

  const createTodo = () => {
    let newTodoText = document.getElementById("inputNewTodo").value;
    newTodoText = newTodoText.trim();
    if (newTodoText !== null) {
      const todoList = [...todos];
      const newTodo = { text: newTodoText, completed: false };
      todoList.push(newTodo);
      saveTodos(todoList);
      setOpenModal(false);
    }
  };

  const validateIsNewTodo = () => {
    const inputTodo = document.getElementById("inputNewTodo");
    let newTodoText = inputTodo.value;
    newTodoText = newTodoText.trim();
    const addButton = document.getElementById("addTodoButton");

    if (newTodoText === "") {
      addButton.disabled = true;
    } else {
      const existsInList = todos.filter((todo) => todo.text === newTodoText);
      if (existsInList.length > 0) {
        addButton.disabled = true;
        inputTodo.setCustomValidity("This todo already exists");
        inputTodo.reportValidity();
      } else {
        addButton.disabled = false;
        inputTodo.setCustomValidity("");
      }
    }
  };

  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modal" autoComplete="off">
        <label htmlFor="inputNewTodo">Add your new Todo</label>
        <input
          placeholder="Chop onion"
          id="inputNewTodo"
          autoComplete="off"
          onChange={validateIsNewTodo}
        ></input>
        <button onClick={onClickDisplayModal}>Cancel</button>
        <button onClick={createTodo} id="addTodoButton">
          Add
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
