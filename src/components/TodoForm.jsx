import React from "react";

function TodoForm({ setOpenModal, addTodo }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue); 
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit(event); 
            setOpenModal(false);
        }
    }
    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <label className="TodoForm-label">Escribe tu nuevo TODO</label>
            <textarea
                className="TodoForm-textarea"
                placeholder="Cortar cebolla..."
                value={newTodoValue}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel} 
                >Volver</button>
                <button 
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add"
                >Crear</button>
            </div>
        </form>
    );
}

export { TodoForm };