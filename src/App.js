import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';


 
//localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue) {
  

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const[item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  };

  return [item, saveItem ]
}

function App() {
  
  //Tener la lista de todos como un estado para que se pueda actualizar
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
   
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



