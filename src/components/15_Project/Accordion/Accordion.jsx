import './Accordion.css'
import { useState } from 'react'
import data from './data'
import SingelQuestion from './SingelQuestion'
export default function Accordion () {
    const [questions,setQuestions] = useState(data)
    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {questions.map(question => {
                        return <SingelQuestion key={question.id} {...question}/>
                    })}
                </section>  
            </div>
        </main>
    )
}