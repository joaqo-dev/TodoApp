import { FaCheck } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";

function TodoItem({ text, completed, onCompleted, onDelete }) {
  return (
    <li className="todo-item">
      <FaCheck color={completed ? '#0cd0ee' : 'gray'} onClick={onCompleted}
    ></FaCheck>
      <p className={completed ? 'completed' : ''}>{text}</p>
      <FiDelete color='red' size= '30px'  onClick={onDelete}></FiDelete>
    </li>
  );
}

export { TodoItem };