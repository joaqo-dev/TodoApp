import React from "react";
import { useLocalStorage } from '../customHook/useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({children}){
    //Tener la lista de todos como un estado para que se pueda actualizar
  const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
   
  // Buscar el valor ingresado en el imput
  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  

  // Contar tareas completadas y totales
  const completedTodos = todos.filter(todos => !!todos.completed === true).length;
  const totalTodos = todos.length;


 
  // Filtrar los todos por el valor de búsqueda
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)}
  )

  const addTodo = (text) =>{
    const newTodos = [...todos];
    newTodos.push({
      id: Date.now(),
      text,
      completed: false,
    })
    saveTodos(newTodos);
  }

  // Alternar el estado de completado de un todo
  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; 
    saveTodos(newTodos);
  };


  // Borrar un todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id); 
    saveTodos(newTodos);
  };



    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export {TodoContext, TodoProvider}