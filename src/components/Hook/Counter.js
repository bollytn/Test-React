import { useReducer, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [spring, setSpring] = useState({});

    const increment = () => dispatch({ type: 'increment' });
    const decrement = () => dispatch({ type: 'decrement' });

    const animation = useSpring({
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.2)' },
        config: { duration: 500 },
    });

    return (
        <div>
            <animated.button
                style={animation}
                onClick={increment}
            >
                +
            </animated.button>
            <animated.button
                style={animation}
                onClick={decrement}
            >
                -
            </animated.button>
            <animated.div
                style={{
                    ...animation,
                    fontSize: '48px',
                    fontWeight: 'bold',
                }}
            >
                {state.count}
            </animated.div>
        </div>
    );
};

export default Counter;