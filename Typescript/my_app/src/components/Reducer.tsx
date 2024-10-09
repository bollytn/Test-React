// Reducer.tsx
import { useReducer, ReactNode } from 'react';

// Define the initial state
const initialState = { count: 0 };

enum Reducer_Action_Types {
    INCREMENT,
    DECREMENT,
    RESET
}

type Reducer_Action = {
    type: Reducer_Action_Types;
    value: number;
};

// Define the reducer function
const reducer = (state: typeof initialState, action: Reducer_Action): typeof initialState => {
    switch (action.type) {
        case Reducer_Action_Types.INCREMENT:
            return { count: state.count + (action.value) };
        case Reducer_Action_Types.DECREMENT:
            return { count: state.count - (action.value) };
        case Reducer_Action_Types.RESET:
            return initialState;
        default:
            return state;
    }
};

interface ChildrenTypes {
    children: (count: number) => ReactNode;
}

const Reducer = ({ children }: ChildrenTypes) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {children(state.count)}
            <button onClick={() => dispatch({ type: Reducer_Action_Types.INCREMENT, value: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: Reducer_Action_Types.DECREMENT, value: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: Reducer_Action_Types.RESET, value: 0 })}>
                Reset
            </button>
        </div>
    );
};

export default Reducer;