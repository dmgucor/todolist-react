import React from "react";
import "./styles.css"
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (<h2 className="TodoCounter">You have completed {completedTodos} out of {totalTodos} TODOs</h2>);
}

export { TodoCounter };