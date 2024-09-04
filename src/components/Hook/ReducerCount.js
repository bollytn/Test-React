import { useReducer } from "react"

export default function ReducerCount() {

    const initialState = {
        count: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'up': return { count: state.count + 1 }
            case 'down': return { count: state.count - 1 }
            case 'reset': return { count: 0 }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <main>
                <h1>{state.count}</h1>
                <button onClick={() => { dispatch({ type: 'up' }) }}>up</button>
                <button onClick={() => { dispatch({ type: 'down' }) }}>down</button>
                <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
            </main>
        </>
    )


}