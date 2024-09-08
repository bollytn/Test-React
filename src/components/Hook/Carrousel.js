import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import './style.css'
import { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";


const slides = ['slide1', 'slide2', 'slides3']
const DATA = ['heading', 'subheading']
const list = [{ id: 0, color: 'orange' }, { id: 1, color: 'pink' }, { id: 2, color: 'green' }]

const Carrousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [heading, setHeading] = useState([])

    const title = useTransition(heading, {
        from: { opacity: 0, transform: 'translateY(-50px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-50px)' },
        config: { duration: 800 },
    })

    useEffect(() => {
        setHeading(DATA)
    }, [])

    const transition = useTransition(list[activeIndex], {
        from: { opacity: 0, display: 'none' },
        enter: { opacity: 1, display: 'block' },
        leave: { opacity: 0, display: 'none' }
    })
    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % list.length)
    }
    const prevSlide = () => {
        setActiveIndex(((activeIndex - 1) + list.length) % list.length)
    }

    return (
        <div className="carrousel-container">
            <div className="title">
                {
                    title((styles, item, index) => (
                        <animated.div key={index} style={styles}>
                            {item}
                        </animated.div>
                    ))
                }
            </div>
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
                            width: '100%',
                            height: '200px',
                            color: '#2e4053',
                            // border: '1px solid #2e4053',
                            boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
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