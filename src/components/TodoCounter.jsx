import React from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter(){
    const {completedTodos,totalTodos} = React.useContext(TodoContext)
    if (totalTodos === 0){
      return(
        <h1>Bienvenido, Crea tu primer TODO!</h1>
      )
    }else{
      return(
        completedTodos===totalTodos 
        ? <h1> Felicidades!! completaste tus {totalTodos} TODOs!!</h1>
        : <h1> Has completado {completedTodos} de {totalTodos} TODOs </h1>
      )
    }
    
  }

export {TodoCounter};