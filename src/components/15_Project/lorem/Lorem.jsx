import { useState } from "react";
import data from './data'
import './style.css';

export default function Lorem() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        let amount = parseInt(count)
        if (count <= 0) {
            amount = 1
        }
        if (count > 8) {
            amount = 8
        }
        setText(data.slice(0, amount))

    }
    return (
        <section className="section-center">
            <h3>tired of boring</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount">
                    paragraphe
                </label>
                <input type="number" name="amount" id="amount"
                    value={count}
                    onChange={(e) => setCount(e.target.value)} />
                <button className="btn" type="submit">generate</button>
            </form>
            <article className="lorem-text">
                {
                    text.map((item, index) => (
                        < p key={index} > {item}</p>
                    ))
                }
            </article>
        </section >
    )
}