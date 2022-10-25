import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList/>
      <Modal><p>kkjk</p></Modal>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export { AppUI };
