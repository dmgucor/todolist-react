import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { ModalAddTodo } from "../ModalAddTodo";
import { ModalDeleteTodo } from "../ModalDeleteTodo";

function AppUI() {
  const { openModal, openModalAddItem } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      {openModal && (
        <Modal>
          {openModalAddItem === true ? (
            <ModalAddTodo></ModalAddTodo>
          ) : (
            <ModalDeleteTodo></ModalDeleteTodo>
          )}
        </Modal>
      )}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
