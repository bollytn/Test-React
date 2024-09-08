import { animated, useTransition } from "@react-spring/web";
import { useState } from "react";

const COLORS = [{ id: 0, color: 'purple', code: '#a459d1' },
{ id: 1, color: 'pink', code: '#f266ab' },
{ id: 2, color: 'orange', code: '#ffb84c' }
];

const UseTransition = () => {

    const [colors, setColors] = useState(COLORS);

    const transitionColor = useTransition(colors, {
        from: { opacity: 0, transform: 'perspective(600px) rotateX(180deg)' },
        enter: { opacity: 1, transform: 'perspective(600px) rotateX(0deg)' },
        leave: { opacity: 0, transform: 'perspective(600px) rotateX(180deg)' },
        config: { duration: 1000 },
    });

    const handleMouseLeave = () => {
        setColors([]);
    }
    const handleMouseEnter = () => {
        setColors(COLORS);
    }

    return (
        <main className="reduceForm" >

            <div
                className="color"
                style={{ minHeight: '50px', width: '100px' }}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}>
                {transitionColor((styles, item) => (
                    <animated.div key={item.id} style={{
                        ...styles,
                        fontSize: '50px',
                        color: item.code,
                        cursor: 'pointer',
                    }}>
                        {item.color}
                    </animated.div>
                ))}
            </div>
        </main>
    )
}

export default UseTransition;