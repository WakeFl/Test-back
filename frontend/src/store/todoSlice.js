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
        },
        replaceTodo(state, action) {
            state.todos = action.payload;
        }

    },
});

export const { addTodo, removeTodo, replaceTodo } = todoSlice.actions;

export default todoSlice.reducer;