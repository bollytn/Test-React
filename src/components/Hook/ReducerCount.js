import { useReducer } from "react";
import './style.css';
import { animated, useSpring } from '@react-spring/web';

export default function ReducerCount() {

    const initialState = {
        count: 0,
        error: null,
        show: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'up':
                {
                    const newCount = state.count + 1
                    const hasError = newCount > 5

                    return {
                        ...state,
                        count: hasError ? state.count : newCount,
                        error: hasError ? 'Maximum reached' : null,
                        show: hasError ? true : false
                    }
                }
            case 'down':
                {
                    const newCount = state.count - 1
                    const hasError = newCount < 0
                    return {
                        ...state,
                        count: hasError ? state.count : newCount,
                        error: hasError ? 'Minimum reached' : null,
                        show: hasError ? true : false
                    }
                }

            case 'reset': return { ...initialState }
            default: return state
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const fadein = useSpring({
        opacity: state.show ? 1 : 0
    });

    return (
        <main className="reduceForm">
            <animated.div className="anim" style={{
                width: 80,
                height: 80,
                background: '#ff6d6d',
                borderRadius: 8,
            }}>
                <h1>{state.count}</h1>
            </animated.div>
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
            <animated.div style={fadein} className={`error ${state.error ? 'show' : 'hide'}`}>
                <h2>{state.error}</h2>
            </animated.div>
        </main>
    );
}