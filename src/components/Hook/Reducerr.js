import { useReducer } from "react"

export default function Reducerr() {

    const initialState = {
        count: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'up': return { count: state.count + 1 }
            case 'down': return { count: state.count - 1 }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>{state.count}</h1>
        </>
    )


}