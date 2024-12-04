import React from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
    return(
      <input placeholder= "Todo Search..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue (event.target.value)
      }}
      ></input>
    )
  }

export {TodoSearch};
