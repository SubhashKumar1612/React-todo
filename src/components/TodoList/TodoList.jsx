

import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
import './TodoList.css';


function TodoList({editTodo, DeleteTodo,todofinshed}){

  const list=useSelector((state)=>state.todo.todoList);
  console.log(list,"this is list")
  


  function onFinished(todo,isFinished){
   todofinshed({todo, isFinished});
  }
  function onDelete(todo){
    DeleteTodo({todo});
  }
  function onEdit(todo,todoText){
   editTodo({todo,todoText});
  }

   
    return(
      <ul className="todo-list-container">
      {list.length > 0 ? (
          list.map(todo => (
              <li key={todo.id} className={todo.finished ? "finished" : ""}>
                  <Todo 
                      id={todo.id}
                      isFinished={todo.finished}
                      todoData={todo.todoData}
                      changeFinished={(isFinished) => onFinished(todo, isFinished)}
                      onDelete={() => onDelete(todo)}
                      onEdit={(todoText) => onEdit(todo, todoText)}
                  />
              </li>
          ))
      ) : (
          <li>No todos available</li>
      )}
  </ul>
    )
}
export default TodoList;





// import Todo from "../Todo/Todo";
// import { useDispatch, useSelector } from "react-redux";

// function TodoList() {
//   const dispatch = useDispatch();
//   const list = useSelector((state) => state.todo.todos); // Ensure it matches the updated state structure

//   function onFinished(todo, isFinished) {
//     dispatch({ type: 'finish_todo', payload: { todo, isFinished } });
//   }

//   function onDelete(todo) {
//     dispatch({ type: 'delete_todo', payload: { todo } });
//   }

//   function onEdit(todo, todoText) {
//     dispatch({ type: 'edit_todo', payload: { todo, todoText } });
//   }

//   if (!list || list.length === 0) {
//     return <div>No todos available</div>;
//   }

//   return (
//     <div>
//       {list.map((todo) => (
//         <Todo
//           key={todo.id}
//           id={todo.id}
//           isFinished={todo.finished}
//           todoData={todo.todoData}
//           changeFinished={(isFinished) => onFinished(todo, isFinished)}
//           onDelete={() => onDelete(todo)}
//           onEdit={(todoText) => onEdit(todo, todoText)}
//         />
//       ))}
//     </div>
//   );
// }

// export default TodoList;
