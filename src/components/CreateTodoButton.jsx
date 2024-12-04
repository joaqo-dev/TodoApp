function CreateTodoButton() {
  
  return (
    
    <button className="create-todo-button"
    onClick={
      (event)=> {
        console.log('Le diste click')
        console.log(event)
        console.log(event.target)
      }
    }> + </button>
  );
}

export { CreateTodoButton };