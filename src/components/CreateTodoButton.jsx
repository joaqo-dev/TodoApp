function CreateTodoButton({setOpenModal}) {
  return (
    <button className="create-todo-button"
    onClick={
      ()=> {
        setOpenModal(state => !state)
      }
    }> + </button>
  );
}

export { CreateTodoButton };