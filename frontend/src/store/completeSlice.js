import { createSlice } from '@reduxjs/toolkit';

const completeSlice = createSlice({
    name: 'completed',
    initialState: {
        completed: [],
    },
    reducers: {
        addCompleted(state, action) {
            state.completed.push(
                {
                    ...action.payload.item,
                    date: new Date().toLocaleString()
                }
            );
        },
        replaceCompleted(state, action) {
            state.completed = action.payload
        }
    }
});

export const { addCompleted, replaceCompleted } = completeSlice.actions;

export default completeSlice.reducer;