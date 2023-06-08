import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload.item);
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.activity !== action.payload.item.activity);
        }
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;