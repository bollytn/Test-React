import data from './data'
import './birthday.css'
import Lists from './Lists'
import { useState } from 'react'

export default function Birthday () {
    const [people,setPeople] = useState(data);
    return (
        <main>
            <section className="container">
                <h3>{people.length} Birthday today</h3>
                <Lists people={people}/>
                <button onClick={() => setPeople([])
                }>Clear All</button>
            </section>
        </main>
    )
}