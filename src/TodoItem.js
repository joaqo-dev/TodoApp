function TodoItem({ text, completed }) {
  return (
    <li className="todo-item">
      <span>✔</span>
      <p className={completed ? 'completed' : ''}>{text}</p>
      <span>❌</span>
    </li>
  );
}

export { TodoItem };