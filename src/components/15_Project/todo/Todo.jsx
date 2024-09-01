import { useEffect, useState } from 'react'
import './style.css'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if (list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}

export default function Todo() {
    const [name, setName] = useState('')
    const [alert, setAlert] = useState({ show: false, type: '', msg: '' })
    const [isEditing, setIsEditing] = useState(false)
    const [list, setList] = useState(getLocalStorage)
    const [editId, setEditId] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            // display alert
            showAlert(true, 'danger', 'please enter value')
        } else if (name && isEditing) {
            // deal with edit
            setList(list.map((item) => {
                if (item.id === editId) {
                    return { ...item, title: name }
                }
                return item
            }))
            setName('')
            setIsEditing(false)
            setEditId(null)
            showAlert(true, 'success', 'value changed')
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

    const editItem = (id) => {
        const specificItem = list.find(item => item.id === id)
        setIsEditing(true)
        setEditId(id)
        setName(specificItem.title)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <section className="section-center">
            <form className='grocery-form' onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                <h4>Todo Lists</h4>
                <div className="form-control">
                    <input type="text" className="grocery" placeholder='e.g. eggs' value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="submit" className="submit-btn">
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className="grocery-container">
                    <List items={list} removeItem={removeItem} editItem={editItem} />
                    <button className='clear-btn' onClick={clearList}>clear items</button>
                </div>
            )}

        </section>
    )
}