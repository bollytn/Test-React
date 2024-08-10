import { useState } from "react"
import data from './data'

export default function Accordion() {

    const [selected, setSelected] = useState(null);

    const handleSingelSelection = (getCurrentId) =>
        setSelected(getCurrentId === selected ? null : getCurrentId);


    console.log(selected);

    return <div className="wrapper">Accordion
        <div className="accordion">
            {
                data && data.length > 0 ?
                    data.map((dataItem, key) =>
                        <div className="item">
                            <div className="title" onClick={() => handleSingelSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ? (
                                    <div className="content">{dataItem.answer}</div>
                                ) : null
                            }
                        </div>
                    )
                    : <div>No data found</div>
            }
        </div>
    </div>
}