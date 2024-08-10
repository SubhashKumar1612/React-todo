
import './App.css'

import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { addTodo,deleteTodo,editTodo, todoFinshed } from './actions/todoActions';
import {deleteTodo,addTodo,editTodo,todoFinshed} from './slices/todoSlice';
function App() {

  const dispatch=useDispatch();
  const action=bindActionCreators({addTodo,deleteTodo,editTodo, todoFinshed},dispatch)

  return (
      <>
       <h1>Todo</h1>
      <AddTodo addTodo={action.addTodo} />
      <TodoList DeleteTodo={action.deleteTodo} editTodo={action.editTodo} todofinshed={action.todoFinshed} />
     </>
  )
}

export default App
