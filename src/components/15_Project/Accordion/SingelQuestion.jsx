import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export default function SingelQuestion ({id,title,info}) {
    const [showInfo,setShowInfo] = useState (false)

    const showHide = () => {
        setShowInfo(!showInfo)
    }

    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={showHide}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}