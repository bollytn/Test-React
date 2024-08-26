import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export default function SingelQuestion({ id, title, info, curOpen, setCurOpen }) {
    const isOpen = curOpen === id;
    const handleToggle = () => {
        console.log('current open : ' + curOpen);
        console.log('index : ' + id);
        console.log('isopne : ' + isOpen);

        setCurOpen(isOpen ? null : id)
    }
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={handleToggle}>{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            </header>
            {isOpen && <p>{info}</p>}
        </article>
    )
}