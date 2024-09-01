import { FaBars } from "react-icons/fa";
import logo from './logo.svg'
import { links, social } from './data'
import './style.css'
import { useRef, useState } from "react";

export default function Navbar() {
    const [showLink, setShowLink] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="" />
                    <button className="nav-toggle">
                        <FaBars onClick={() => setShowLink(!showLink)} />
                    </button>
                </div>
                
                <div className={`${showLink ? "links-container show-container" : "links-container"}`}>
                    <ul className="links">
                        {links.map((link) => {
                            const { id, url, text } = link
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <ul className="social-icons">
                    {
                        social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav >
    )
}