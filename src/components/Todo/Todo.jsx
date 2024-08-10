// import { useState } from "react";

// function Todo({todoData ,isFinished ,changeFinished ,onDelete,onEdit}){
//     const [finished,setfinished]=useState(isFinished);
//     const [isEditing,setIsEditing]=useState(false);
//     const [editText,setEditText]=useState(todoData);
//     return(
//         <div>
//             <input type="checkbox" checked={finished} onChange={(e)=>{
//                 setfinished(e.target.checked);
//                 changeFinished(e.target.checked);
//                 }} />
//         {(isEditing)?<input type='text' value={editText} onChange={e => setEditText(e.target.value)}/> :<span>{todoData}</span>}
//         <button onClick={()=>{
//             setIsEditing(!isEditing);
//             onEdit(editText);
//         }}>{(!isEditing)?'Edit':'save'}</button>
//         <button onClick={onDelete}>Delete</button>

//         </div>
//     )
// }
// export default Todo;


import { useState } from "react";
import './Todo.css';  // Import the CSS file

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);

    return (
        <div className={`todo-container ${finished ? 'finished' : ''}`}>
            <input 
                type="checkbox" 
                checked={finished} 
                onChange={(e) => {
                    setFinished(e.target.checked);
                    changeFinished(e.target.checked);
                }} 
            />
            {isEditing ? (
                <input 
                    type='text' 
                    value={editText} 
                    onChange={e => setEditText(e.target.value)} 
                />
            ) : (
                <span>{todoData}</span>
            )}
            <button 
                className="edit-button"
                onClick={() => {
                    setIsEditing(!isEditing);
                    if (isEditing) {
                        onEdit(editText);
                    }
                }}
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button 
                className="delete-button" 
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default Todo;
