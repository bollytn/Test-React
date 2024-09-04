import { useReducer } from "react"

export default function ReducerForm() {

    const initialState = {
        count: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'up': return { count: 2 }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <main>
                <h1>{state.count}</h1>
                <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => { dispatch({ type: 'up' }) }}>
                </button>
            </main>
        </>
    )
}