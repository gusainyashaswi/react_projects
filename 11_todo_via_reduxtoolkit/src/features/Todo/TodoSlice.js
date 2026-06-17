import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id:1,
        text:"Complete React"
    }]
}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((val)=>val.id!==action.payload)
        },

        updateTodo: (state, action)=>{
            state.todos = state.todos.map((val)=>val.id===action.payload.id? {...val, text: action.payload.text}: val)
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = TodoSlice.actions
export default TodoSlice.reducer