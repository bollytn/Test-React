import React, { useContext } from 'react'
import CardItem from './CardItem'
import { AppContext } from './context'

const CardContainer = () => {
    const { card } = useContext(AppContext)
    if (card.length === 0) {
        return (
            <section className='cart'>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {card.map((item) => {
                    return <CardItem key={item.id} {...item} />
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>$0.00</span>
                    </h4>
                </div>
                <button
                    className='btn clear-btn'
                    onClick={() => console.log('clear cart')}
                >
                    clear cart
                </button>
            </footer>
        </section>
    )
}

export default CardContainer