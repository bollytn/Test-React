import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review() {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]

    const checkIndex = (i) => {
        if (i > people.length - 1) {
            return 0
        } if (i === -1) {
            return people.length - 1
        } return i
    }

    const prevPerson = () => {
        setIndex((index) => {
            let i = index - 1
            return checkIndex(i)
        });
    }

    const nextPerson = () => {
        setIndex((index) => {
            let i = index + 1
            return checkIndex(i)
        });
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * (people.length))
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkIndex(randomNumber))
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                surprise me
            </button>
        </article>
    )
}