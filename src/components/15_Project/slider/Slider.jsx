import './style.css'
import data from './data'
import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa6'
export default function Slider() {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)
    return (
        <section className='section'>
            {
                people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = people[index]
                    return (
                        <article key={personIndex} className='person'>
                            <img src={image} alt={name} className='person-img' />
                            <h4>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })
            }
        </section>
    )
}