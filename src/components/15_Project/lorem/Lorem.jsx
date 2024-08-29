import { useState } from "react";
import data from './data'
import './style.css';

export default function Lorem() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState(data)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hello');
        const text = event.target.elements.text.value.trim();
    }
    return (
        <section className="section-center">
            <h3>tired of boring</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount">
                    paragraphe
                </label>
                <input type="number" name="amount" id="amount" value={count} />
            </form>
        </section>
    )
}