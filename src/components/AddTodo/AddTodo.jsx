import { useState } from "react";
import './AddTodo.css';  // Ensure the CSS file is correctly imported

function AddTodo({ addTodo }) {
    const [inputText, setInputText] = useState('');

    return (
        <div className="add-todo-container">
            <input 
                type="text"
                value={inputText}
                placeholder="Add your next Todo"
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => {
                addTodo({ todoText: inputText });
                setInputText('');
            }}>Add</button>
        </div>
    );
}

export default AddTodo;
