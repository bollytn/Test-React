import { FaTimes } from 'react-icons/fa'
import logo from './logo.svg'
import { links, social } from './data'
import { useContext } from 'react'
import { AppContext } from './context'

export default function Sidebare() {
    const {isSidebarOpen,closeSidebar} = useContext(AppContext)
    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <img className='logo' src={logo} alt="logo" />
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                {links.map((link) => {
                    const { id, url, text, icon } = link
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className='social-icons'>
                {social.map((link) => {
                    const { id, url, icon } = link
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}