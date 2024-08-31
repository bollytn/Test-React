import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items }) => {
    return (
        <div className="glocery-list">
            {items.map((item) => (
                <article key={item.id} className='glocery-item'>
                    <p className='title'>{item.title}</p>
                    <div className="btn-container">
                        <button type='button' className='edit-btn'>
                            <FaEdit />
                        </button>
                        <button type='button' className='delete-btn'>
                            <FaTrash />
                        </button>
                    </div>
                </article>
            ))
            }
        </div>
    )
}

export default List