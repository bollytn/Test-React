import './Accordion.css'
import { useState } from 'react'
import data from './data'
import SingelQuestion from './SingelQuestion'
export default function Accordion() {
    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className='info'>
                    <SingelQuestion data={data} />
                </section>
            </div>
        </main>
    )
}