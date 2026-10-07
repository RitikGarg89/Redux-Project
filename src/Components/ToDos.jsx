import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, clearCompletedTodos } from '../Features/Todo/ToDoSlice'

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const remainingCount = todos.filter((t) => !t.completed).length
    const completedCount = todos.length - remainingCount

    return (
        <div className="w-full space-y-3">
            {/* Minimal Header / Counter */}
            <div className="flex items-center justify-between px-1 text-xs text-zinc-500">
                <span>
                    {remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} remaining
                </span>

                {completedCount > 0 && (
                    <button
                        onClick={() => dispatch(clearCompletedTodos())}
                        className="hover:text-zinc-300 transition-colors cursor-pointer"
                    >
                        Clear completed
                    </button>
                )}
            </div>

            {/* List */}
            {todos.length === 0 ? (
                <div className="py-12 text-center text-zinc-600 text-sm border border-dashed border-zinc-800/80 rounded-xl">
                    All caught up. Enjoy the calm.
                </div>
            ) : (
                <div className="bg-[#18181b] border border-zinc-800 rounded-xl divide-y divide-zinc-800/70 overflow-hidden">
                    {todos.map((todo) => {
                        const isCompleted = Boolean(todo.completed)

                        return (
                            <div
                                key={todo.id}
                                className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-zinc-800/30 transition-colors group"
                            >
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                    {/* Minimal Circle Checkbox */}
                                    <button
                                        type="button"
                                        onClick={() => dispatch(toggleTodo(todo.id))}
                                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
                                            isCompleted
                                                ? 'bg-zinc-600 border border-zinc-600 text-zinc-200'
                                                : 'border border-zinc-600 hover:border-zinc-400 text-transparent'
                                        }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-2.5 h-2.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {/* Task Text */}
                                    <span
                                        onClick={() => dispatch(toggleTodo(todo.id))}
                                        className={`text-sm cursor-pointer select-none truncate transition-colors ${
                                            isCompleted
                                                ? 'line-through text-zinc-500'
                                                : 'text-zinc-200'
                                        }`}
                                    >
                                        {todo.text}
                                    </span>
                                </div>

                                {/* Subtle Delete Action */}
                                <button
                                    type="button"
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    title="Delete"
                                    className="text-zinc-600 hover:text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity p-1 cursor-pointer flex-shrink-0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Todos