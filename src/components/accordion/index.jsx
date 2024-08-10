import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingelSelection = (getCurrentId) =>
        setSelected(getCurrentId === selected ? null : getCurrentId);

    const handleMultiSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexofCurrentId);
        findIndexofCurrentId === -1
            ? cpyMultiple.push(getCurrentId)
            : cpyMultiple.splice(findIndexofCurrentId, 1)
        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem, key) => (
                        <div key={dataItem.id} className="item">
                            <div
                                className="title"
                                onClick={enableMultiSelection
                                    ? () => handleMultiSelection(dataItem.id)
                                    : () => handleSingelSelection(dataItem.id)}
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection
                                    ? multiple.indexOf(dataItem.id) !== -1 &&
                                    <div className="content">{dataItem.answer}</div>
                                    : selected === dataItem.id &&
                                    <div className="content">{dataItem.answer}</div>
                            }

                            {/*selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?(
                                <div className="content">{dataItem.answer}</div>
                            ) : null*/}

                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}
