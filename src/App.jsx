import React, { useContext } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import BeatLoader from "react-spinners/BeatLoader"
import { TodoContext } from './components/TodoContext';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm'
 
//localStorage.removeItem('TODOS_V1');



function App() {
  const {loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, addTodo} = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <BeatLoader color='#0cd0ee' />}
        {(!loading && searchedTodos.length === 0) && <p>ToDo App del kako! </p>}

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
      <CreateTodoButton setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
    </>
  );
}

export default App;