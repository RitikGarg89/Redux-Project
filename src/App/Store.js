import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/ToDoSlice';

const store = configureStore({
    reducer: todoReducer
})

export default store;