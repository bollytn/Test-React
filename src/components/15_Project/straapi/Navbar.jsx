import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'


const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext)
  return (
    <nav className='nav'>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li className='link-btn'>
            <button className='link-btn'>product</button>
          </li>
          <li className='link-btn'>
            <button className='link-btn'>product</button>
          </li>
          <li className='link-btn'>
            <button className='link-btn'>product</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Signin in</button>
      </div>
    </nav>
  )
}

export default Navbar