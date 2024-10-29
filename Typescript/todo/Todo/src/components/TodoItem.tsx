import { Todo } from "../types/todos"

interface TodoItemProps {
    todo: Todo;
    onCompleteChange: (id: number, completed: boolean) => void;
}
export default function TodoItem({ todo,onCompleteChange }: TodoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox"
                    className="mr-2 scale-125"
                    checked={todo.completed}
                    onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
                />
                <span className={
                    todo.completed ? "line-through text-gray-400" : ""
                }>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}