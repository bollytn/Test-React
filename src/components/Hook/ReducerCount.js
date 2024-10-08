import { useReducer, useRef, useState } from "react";
import "./style.css";
import { animated, useSpring } from "@react-spring/web";

export default function ReducerCount() {
    const [location, setLocation] = useState({});
    const [currentPosition, setCurrentPosition] = useState(0);
    const container = useRef(null);

    const initialState = {
        count: 0,
        error: null,
        show: false,
    };

    const reducer = (state, action) => {
        const tempBtn = container.current.getBoundingClientRect();
        const center = tempBtn.left;
        const bottom = tempBtn.bottom;
        setLocation({ center, bottom });
        console.log(location);
        

        switch (action.type) {
            case "up": {
                const newCount = state.count + 1;
                const hasError = newCount > 5;

                return {
                    ...state,
                    count: hasError ? state.count : newCount,
                    error: hasError ? "Maximum reached" : "Minimum reached",
                    show: hasError ? true : false,
                };
            }
            case "down": {
                const newCount = state.count - 1;
                const hasError = newCount < 0;
                return {
                    ...state,
                    count: hasError ? state.count : newCount,
                    error: hasError ? "Minimum reached" : "Maximum reached",
                    show: hasError ? true : false,
                };
            }

            case "reset":
                return { ...initialState };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const fadein = useSpring({
        opacity: state.show ? 1 : 0,
        top: state.show ? '59%' : '0%',
        display: state.show ? 'block' : 'block',

        config: {
            tension: 200,
            friction: 20,
            duration: 400,
        },
    });

    const AnimBtn = useSpring({
        transform: state.show ? 'scale(1.2)' : 'scale(0.9)',
        config: { duration: 500 },
    })

    const [anim, api] = useSpring(() => ({
        from: { y: currentPosition },
        onChange:
            (val) => {
                setCurrentPosition(val.value.y);
            },
        config: { duration: 1000 },
    }));

    const handleMouseEnter = () => {
        api.start({
            from: { y: currentPosition },
            to: { y: 5 },
        });
    };

    const handleMouseLeave = () => {
        api.start({
            from: { y: currentPosition },
            to: { y: 0 },
        });
    };

    return (


        <main className="reduceForm">

            <animated.div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="anim"
                style={{
                    ...anim,
                    ...AnimBtn,
                    width: 80,
                    height: 80,
                    background: "#ff6d6d",
                    borderRadius: 10,
                }}
            >
                <h1>{state.count}</h1>
            </animated.div>
            <div>
                <button
                    onClick={() => {
                        dispatch({ type: "up" });
                    }}
                    className="btn btn-primary"
                    style={AnimBtn}
                >
                    up
                </button>
                <button
                    ref={container}
                    onClick={() => {
                        dispatch({ type: "down" });
                    }}
                    className="btn btn-primary"
                    style={AnimBtn}
                >
                    down
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: "reset" });
                    }}
                    className="btn btn-secondary"
                    style={AnimBtn}
                >
                    reset
                </button>
            </div>
            <animated.div
                style={{
                    ...AnimBtn,
                    ...fadein,
                }}
                className="error"
            >
                <h2>{state.error}</h2>
            </animated.div>
        </main>
    );
}
