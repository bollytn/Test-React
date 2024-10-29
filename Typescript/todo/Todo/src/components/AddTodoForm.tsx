import React, { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!input.trim()) return
        // Add todo to the list
        onSubmit(input)
        setInput("")
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="waht need to be done"
                className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button
                type="submit"
                className="w-16 rounded-s-md bg-slate-900 text-white hover:bg-slate-900"
            >
                Add
            </button>
        </form>
    )
}