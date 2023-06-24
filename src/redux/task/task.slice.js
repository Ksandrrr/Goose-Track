import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: [],
    reducers: {
        addTask: {
            reducer: (state, { payload }) => {
                state.push(payload);
            },
        }
    },
});
export const {addTask } = taskSlice.actions;
export default taskSlice.reducer;