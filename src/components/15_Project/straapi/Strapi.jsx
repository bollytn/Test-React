import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import './style.css'

export default function Strapi () {
    return (
        <>
        <Navbar/>
        <Sidebar/>
        <Hero/>
        <Submenu/>
        </>
    )
}