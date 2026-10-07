import AddToDo from './Components/AddToDo'
import ToDos from './Components/ToDos'

function App() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-[#121214] text-zinc-200 flex flex-col justify-between selection:bg-zinc-800 selection:text-zinc-100">
      <main className="w-full max-w-xl mx-auto px-5 py-16 sm:py-24">
        {/* Calm Header */}
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
            {today}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
            Tasks
          </h1>
        </header>

        {/* Add Task Input */}
        <div className="mb-6">
          <AddToDo />
        </div>

        {/* Task List */}
        <ToDos />
      </main>

      {/* Quiet Footer */}
      <footer className="py-8 text-center text-xs text-zinc-600">
        Redux Toolkit
      </footer>
    </div>
  )
}

export default App