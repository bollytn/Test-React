import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import './style.css'
import { useState } from "react";
import { animated, useTransition } from "@react-spring/web";


const slides = ['slide1', 'slide2', 'slides3']
const list = [{ id: 0, color: 'orange' }, { id: 1, color: 'pink' }, { id: 2, color: 'green' }]
const Carrousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    // const [listactive, setListactive] = useState([list])
    const transition = useTransition(list[activeIndex], {
        from: { opacity: 0, display: 'none' },
        enter: { opacity: 1, display: 'block' },
        leave: { opacity: 0, display: 'none' }
    })

    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % list.length)
    }

    const prevSlide = () => {
        setActiveIndex(((activeIndex - 1) + slides.length) % list.length)
    }

    return (
        <div className="carrousel-container">
            <button className="icon left" onClick={prevSlide}>
                <SlArrowRightCircle />
            </button>
            <div className="slides">
                {transition((styles, item) => {
                    return (
                        <animated.div key={item.id} style={{
                            ...styles,
                            backgroundColor: item.color,
                            padding: '10px',
                            borderRadius: '5px',
                            margin: '20px',
                            width:'100%',
                            height: '200px',
                        }}>
                           <h1> {item.color}</h1>
                        </animated.div>
                    )
                })}
            </div>
            <button className="icon right" onClick={nextSlide}>
                <SlArrowLeftCircle />
            </button>
        </div >
    )
}

export default Carrousel;