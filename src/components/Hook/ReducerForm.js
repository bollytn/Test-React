import { useReducer } from "react"
import './style.css'

export default function ReducerForm() {

    const initialState = {
        username: '',
        email: '',
        notes: ''
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'input': return { ...state, [action.field]: action.payload }
            case 'reset': return initialState
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
        return state
        
    }

    const hadleReset = () => {
        dispatch({ type: 'reset' })
    }

    const handleChange = (e) => {
        dispatch({
            type: 'input',
            field: e.target.name,
            payload: e.target.value,
        })
    }

    return (
        <main className="reduceForm">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        onChange={handleChange}
                        value={state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                    />
                    <br />
                    <input
                        onChange={handleChange}
                        value={state.email}
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                    />
                    <br />
                    <input
                        onChange={handleChange}
                        value={state.notes}
                        type="text"
                        name="notes"
                        className="form-control"
                        placeholder="Notes"
                    />
                </div>
                <div className="btn-submit">
                    <button
                        type="submit"
                        className="btn btn-primary">Submit</button>
                    <button
                        type="button"
                        className="btn btn-secondary" onClick={hadleReset}>
                        Reset
                    </button>
                </div>
            </form>
        </main>
    )
}