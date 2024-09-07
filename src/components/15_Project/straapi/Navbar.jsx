import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'


const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext)

  const displayMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleSubmenu = (e) => {
    const linkBtn = e.target.classList.contains('link-btn')
    if (!linkBtn) {
      closeSubmenu()
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={(displayMenu)}>products</button>
          </li>
          <li >
            <button className='link-btn' onMouseOver={displayMenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displayMenu}>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Signin in</button>
      </div>
    </nav>
  )
}

export default Navbar