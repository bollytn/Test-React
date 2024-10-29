import { dummyData } from "./data/todos"
import TodoItem from "./components/TodoItem"
import { useState } from "react"

function App() {

  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, completed } : todo)))
  }
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-center text-3xl"> Todo</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {dummyData.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompleteChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main >
  )
}

export default App
