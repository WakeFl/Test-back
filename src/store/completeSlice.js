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
    },
});

export const { addCompleted } = completeSlice.actions;

export default completeSlice.reducer;