import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';


const defaultTodos = [
  {id: 1, text: 'Cortar cebolla', completed: true},
  {id: 2, text: 'Tomar curso de react ', completed: false},
  {id: 3, text: 'Culiarse a la llorona', completed: false},
  {id: 4, text: 'Matar una puta', completed: false},
  {id: 5, text: 'Estudiar', completed: true},
]


function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const completedTodos = todos.filter(todos => !!todos.completed === true).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = React.useState('');
    console.log('los usuarios buscar ToDos de '+searchValue);
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)}
  )
  


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
            completed={todo.completed} />
        ))}
      </TodoList>
      
      <CreateTodoButton/>
      
    </>
  );
}


export default App;



