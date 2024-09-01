import { FaBars, FaTwitter } from "react-icons/fa";
import logo from './logo.svg'
import { links, social } from './data'
import './style.css'

export default function Navbar() {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="" />
                    <button className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
                <div className="links-container show-container">
                    <ul className="links">
                        {
                            links.map((link) => {
                                const { id, url, text } = link
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                        }
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
        </nav>
    )
}