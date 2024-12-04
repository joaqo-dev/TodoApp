import React, { useContext } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import BeatLoader from "react-spinners/BeatLoader"
import { TodoContext } from './components/TodoContext';
import { Modal } from './components/Modal';
 
//localStorage.removeItem('TODOS_V1');



function App() {
  const {loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <BeatLoader color='#0cd0ee' />}
        {error && <p>Hubo un error!!</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primer ToDo! </p>}

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

      {openModal && (
        <Modal>
          la funcionalidad de agregar todo
        </Modal>
      )}
    </>
  );
}

export default App;