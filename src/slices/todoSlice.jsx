import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",

    initialState : {
        todos : [],
        filter : "all"
    },

    reducers:{
        getTodos : (state,action) => {
            state.todos = action.payload;
        },
        addTodo : (state,action) => {
            state.todos = [
                ...state.todos,
                action.payload
            ]
        },
        updateStatus : (state,action) => {
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.todoId ? {
                ...todo,
                status: action.payload.todoStatus
             } : 
                todo
            )
        },
        editTodo :(state,action) => {
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.todoId ? {
                    ...todo,
                    todoName: action.payload.newName,
                    todoDesc: action.payload.newDesc
                }:
                todo
            )
        },
        deleteTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        setFilter : (state,action) => {
            state.filter = action.payload
        }
    }
})

export const {
    getTodos,
    addTodo,
    updateStatus,
    editTodo,
    deleteTodo,
    setFilter
} = todoSlice.actions;
export default todoSlice.reducer