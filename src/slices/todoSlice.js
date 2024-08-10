import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todoList:[]
}
const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let todoText=action.payload.todoText;
            state.todoList.push({id:state.todoList.length+1, todoData:todoText, finished:false} )
        },
        editTodo:(todo,action)=>{
            let payloadtodo=action.payload.todo;
            let todoText=action.payload.todoText;
            todo.todoList=todo.todoList.map(t=>{
                if(t.id == payloadtodo.id){
                    t.todoData=todoText;
                }
                return t;
            });
        },
        deleteTodo:(todo,action)=>{
            let payloadtodo=action.payload.todo;
            todo.todoList= todo.todoList.filter(t=> t.id !== payloadtodo.id)
           
        },
        todoFinshed:(todo,action)=>{
            let payloadtodo=action.payload.todo;
            let isFinished=action.payload.isFinished;
           todo.todoList= todo.todoList.map(t=> {
                if(t.id  == payloadtodo.id){
                    t.finished=isFinished;
                }
                return t;
            });
        }
    }
})
export const {deleteTodo,addTodo,editTodo,todoFinshed} =todoSlice.actions;
export default todoSlice.reducer;