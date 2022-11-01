import React from "react";
import "./style.css";
import { TodoContext } from "../TodoContext";

function ModalDeleteTodo() {
  const {
    openModalDeleteItem,
    setOpenModalDeleteItem,
    setOpenModal,
    openModal,
    todoToDelete,
    todos,
    saveTodos,
  } = React.useContext(TodoContext);

  const deleteItem = (itemKey) => {
    const indexItem = todos.findIndex((todo) => todo.text === itemKey);
    const newTodos = [...todos];
    newTodos.splice(indexItem, 1);
    saveTodos(newTodos);
  };

  const onClickDisplayModal = () => {
    setOpenModalDeleteItem(!openModalDeleteItem);
    setOpenModal(!openModal);
  };

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };

  const onClickDelete = () => {
    deleteItem(todoToDelete);
    setOpenModalDeleteItem(!openModalDeleteItem);
    setOpenModal(!openModal);
  };

  return (
    <form onClick={(e) => handleChildElementClick(e)}>
      <div className="modal" autoComplete="off">
        <h2>Are you sure?</h2>
        <div className="inputForm">
          <p>This todo will be deleted.</p>
        </div>
        <div className="buttonContainer">
          <input type="button" value={"Cancel"} onClick={onClickDisplayModal} />
          <button id="addTodoButton" onClick={onClickDelete}>
            Yes, delete
          </button>
        </div>
      </div>
    </form>
  );
}

export { ModalDeleteTodo };
