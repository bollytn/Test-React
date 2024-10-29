import { dummyData } from "./data/todos"
import TodoItem from "./components/TodoItem"

function App() {

  function setTodoCompleted(id: number, completed: boolean) {
    alert(
      `You marked todo with id ${id} as ${completed ? "completed" : "incomplete"}`
    )
  }
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-center text-3xl"> Todo</h1>
      <div className="max-w-screen-lg mx-auto">
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
