import { useReducer } from "react"
import './style.css'

export default function ReducerCount() {

    const initialState = {
        count: 0,
        error: null
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'up':
                {
                    const newCount = state.count + 1
                    const hasError = newCount > 5
                    return {
                        ...state,
                        count: hasError ? state.count : newCount,
                        error: hasError ? 'Maximum reached' : null
                    }
                }
            case 'down':
                {
                    const newCount = state.count - 1
                    const hasError = newCount < 0
                    return {
                        ...state,
                        count: hasError ? state.count : newCount,
                        error: hasError ? 'Minimum reached' : null
                    }
                }

            case 'reset': return { count: 0 }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <main className="reduceForm">
            <h1>{state.count}</h1>
            <div >
                <button
                    onClick={() => { dispatch({ type: 'up' }) }}
                    className="btn btn-primary">up</button>
                <button
                    onClick={() => { dispatch({ type: 'down' }) }}
                    className="btn btn-primary">down</button>
                <button
                    onClick={() => { dispatch({ type: 'reset' }) }}
                    className="btn btn-secondary">reset</button>
            </div>
            <div className={`${state.error ? 'error show' : 'error'}`}>
                <h2>{state.error}</h2>
            </div>
        </main>
    )


}