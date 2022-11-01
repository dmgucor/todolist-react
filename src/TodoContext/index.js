import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V5", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;

  const totalTodos = todos.length;

  const [openModal, setOpenModal] = React.useState(false);
  const [openModalAddItem, setOpenModalAddItem] = React.useState(false);
  const [openModalDeleteItem, setOpenModalDeleteItem] = React.useState(false);
  const [todoToDelete, setTodoToDelete] = React.useState("");

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        todos,
        saveTodos,
        openModalAddItem,
        setOpenModalAddItem,
        openModalDeleteItem,
        setOpenModalDeleteItem,
        openModal,
        setOpenModal,
        todoToDelete,
        setTodoToDelete,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
