import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        { id: nanoid(), text: "Review daily priorities", completed: false },
        { id: nanoid(), text: "Deep work session", completed: true },
        { id: nanoid(), text: "Read for 15 minutes", completed: false }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const rawText = typeof action.payload === 'object' && action.payload !== null
                ? action.payload.text
                : action.payload;

            const text = (rawText || '').trim();
            if (!text) return;

            state.todos.unshift({
                id: nanoid(),
                text,
                completed: false,
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        clearCompletedTodos: (state) => {
            state.todos = state.todos.filter((t) => !t.completed)
        },
        clearAllTodos: (state) => {
            state.todos = []
        }
    }
})

export const { addTodo, removeTodo, toggleTodo, clearCompletedTodos, clearAllTodos } = todoSlice.actions;
export default todoSlice.reducer;