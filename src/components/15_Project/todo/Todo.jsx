import { useState } from 'react'
import './style.css'
import List from './List'
import Alert from './Alert'
export default function Todo() {
    const [name, setName] = useState('')
    const [alert, setAlert] = useState({ show: false, type: '', msg: '' })
    const [isEditing, setIsEditing] = useState(false)
    const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            // display alert
            showAlert(true, 'danger', 'please enter value')
        } else if (name && isEditing) {
            // deal with edit
            console.log('deal with edit');
        } else {
            showAlert(true, 'success', 'item added to the list')
            const newItem = { id: new Date().getTime().toString(), title: name }
            setList([...list, newItem])
            console.log('show alert');
            console.log(list);
            setName('')
        }
    }

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg })
    }

    const clearList = () => {
        showAlert(true, 'danger', 'empty list')
        setList([])
    }

    const removeItem = (id) => {
        showAlert(true, 'danger', 'item removed')
        let newList = list.filter(item => item.id !== id)
        setList(newList)
    }

    return (
        <section className="section-center">
            <form className='grocery-form' onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
                <h4>Todo Lists</h4>
                <div className="form-control">
                    <input type="text" className="grocery" placeholder='e.g. eggs ' value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="submit" className="submit-btn">
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className="grocery-container">
                    <List items={list} removeItem={removeItem} />
                    <button className='clear-btn' onClick={clearList}>clear items</button>
                </div>
            )}

        </section>
    )
}