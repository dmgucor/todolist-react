import React from "react";
import { TodoItem } from "../TodoItem";
import "./styles.css";
import { TodoContext } from "../TodoContext";
import { InfoMessage } from "../InfoMessage";

function TodoList() {
  const { searchValue, saveTodos, loading, error, todos } =
    React.useContext(TodoContext);

  const searchValueLowerCase = searchValue.toLowerCase();
  const filteredList = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValueLowerCase)
  );

  const completeItem = (itemKey) => {
    const indexItem = todos.findIndex((todo) => todo.text === itemKey);

    const newTodos = [...todos];
    newTodos[indexItem].completed = !todos[indexItem].completed;
    saveTodos(newTodos);
  };

  return (
    <div className="todoList">
      {error && <p>There was an error...</p>}
      {loading && <p>Loading...</p>}
      {!loading && !todos.length && (
        <InfoMessage>
          <img src="https://bit.ly/3D6w7Xo" alt="man with task list"></img>
          <p>There are no TODOs, create your first one</p>
        </InfoMessage>
      )}
      {filteredList.length > 0
        ? filteredList.map((item) => (
            <TodoItem
              key={item.text}
              item={item}
              onComplete={() => completeItem(item.text)}
            ></TodoItem>
          ))
        : !loading &&
          todos.length > 0 && (
            <InfoMessage>
              <img src="https://bit.ly/3TI4wCQ" alt="brain confused"></img>
              <p>{`Oops! you don't have any todos that match '${searchValue}'`}</p>
            </InfoMessage>
          )}
    </div>
  );
}

export { TodoList };
