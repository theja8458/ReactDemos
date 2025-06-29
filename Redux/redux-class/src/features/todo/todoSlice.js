import { createSlice,nanoid } from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
    todos: [{id: "abc" , task: "Demo task" , isDone : false}],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo : (state , action)=>{
        const newTodo = {
            id: nanoid(),
            task: action.payload,
            isDone: false
        };
        state.todos.push(newTodo); //direct mutation
        },
        
        deleteTodo : (state , action) =>{
        state.todos =  state.todos.filter((todo) => todo.id !== action.payload)
        },

        markAsDone:(state, action) =>{
         state.todos = state.todos.map((todo)=>{
            if(todo.id === action.payload ){
                todo.isDone = true;
            }
         });
        },
    },
});

export const {addTodo, deleteTodo , markAsDone} = todoSlice.actions;
export default todoSlice.reducer;
