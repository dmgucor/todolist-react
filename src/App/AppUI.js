import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const { openModal } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      {openModal && <Modal />}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
