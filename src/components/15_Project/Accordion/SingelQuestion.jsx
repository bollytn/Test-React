import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export default function SingelQuestion({ data }) {
    const [questions, setQuestions] = useState(data)
    const [showInfo, setShowInfo] = useState(false)

    const showHide = () => {
        setShowInfo(!showInfo)
    }
    return (
        <>
            {questions.map((question,index) => (
                <article className="question" key={index}>
                    <header>
                        <h4>{question.title}</h4>
                        <button className="btn" onClick={showHide}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
                    </header>
                    {showInfo && <p>{question.info}</p>}
                </article>
            ))}
        </>
    )
}