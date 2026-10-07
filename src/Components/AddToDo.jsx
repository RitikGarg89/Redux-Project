import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/ToDoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        dispatch(addTodo({ text: input.trim() }))
        setInput('')
    }

    const hasContent = Boolean(input.trim())

    return (
        <form onSubmit={addTodoHandler} className="w-full">
            <div className="relative flex items-center bg-[#18181b] border border-zinc-800 focus-within:border-zinc-600 rounded-xl px-3.5 py-2.5 transition-colors duration-150">
                <span className="text-zinc-500 select-none mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </span>

                <input
                    type="text"
                    className="w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-500 outline-none"
                    placeholder="Add a task..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={!hasContent}
                    className={`text-xs font-medium px-2.5 py-1 rounded-md transition-all duration-150 cursor-pointer ${
                        hasContent
                            ? 'text-zinc-200 bg-zinc-800 hover:bg-zinc-700 opacity-100'
                            : 'text-zinc-600 opacity-0 pointer-events-none'
                    }`}
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export default AddTodo