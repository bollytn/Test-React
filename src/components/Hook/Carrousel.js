import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import './style.css'
import { useState } from "react";
import { animated, useTransition } from "@react-spring/web";


const Carrousel = ({ slides = ['slide1', 'slide2', 'slides3'] }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const transition = useTransition(activeIndex, {
        from: { opacity: 0, display: 'none' },
        enter: { opacity: 1, display: 'block' },
        leave: { opacity: 0, display: 'none' }
    })

    const nextSlide = () => {
        setActiveIndex((index) => (index + 1) % slides.length)
    }

    const prevSlide = () => {
        setActiveIndex((index) => (index - 1 + slides.length) % slides.length)
    }

    return (
        <div className="carrousel-container">
            <button className="icon left" onClick={prevSlide}>
                <SlArrowRightCircle />
            </button>
            <div className="slides">
                {transition((styles, index) => {
                    return (
                        <animated.div style={styles}>
                            {slides[index]}
                        </animated.div>
                    )
                })}
            </div>
            <button className="icon right" onClick={nextSlide}>
                <SlArrowLeftCircle />
            </button>
        </div>
    )
}

export default Carrousel;