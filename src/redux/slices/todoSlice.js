import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        getTodos(){},
        setTodos(state,action){
            const {todos} = action.payload;
            return {...state,todos}
        },
        clearTodos(state){
            return{todos:[]}
        }
    }
});

export const {getTodos, setTodos, clearTodos} = todoSlice.actions;
export default todoSlice.reducer;
