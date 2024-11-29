import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import { useLocalStorage } from './customHook/useLocalStorage';
import BeatLoader from "react-spinners/BeatLoader"

 
//localStorage.removeItem('TODOS_V1');



function App() {
  
  //Tener la lista de todos como un estado para que se pueda actualizar
  const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
   
  // Buscar el valor ingresado en el imput
  const [searchValue, setSearchValue] = React.useState('');


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

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <BeatLoader color='#0cd0ee' />}
        {error && <p>Hubo un error!!</p>}
        {(!loading && searchedTodos.lenght === 0) && <p>Crea tu primer ToDo! </p>}

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text}
            completed={todo.completed} 
            onCompleted={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            />
            

        ))}
      </TodoList>
      
      <CreateTodoButton/>
      
    </>
  );
}


export default App;



