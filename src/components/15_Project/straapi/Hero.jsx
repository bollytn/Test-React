import React, { useContext } from 'react'
import phoneImg from './images/phone.svg'
import { AppContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useContext(AppContext)

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>payment for the internet</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel suscipit autem nam quos recusandae nihil officiis qui deserunt incidunt et necessitatibus quia, earum architecto minus, natus voluptatum voluptas porro.</p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt="phone" className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero