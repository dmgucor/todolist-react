import React from "react";
import "./styles.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchChanged = (input) => {
    setSearchValue(input);
  };

  return (
    <>
      <input
        className="todoSearch"
        placeholder="onion"
        value={searchValue}
        maxLength="30"
        onChange={(event) => {
          onSearchChanged(event.target.value);
        }}
      ></input>
    </>
  );
}

export { TodoSearch };
