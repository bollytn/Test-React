import './container.css'
import Hero from "../Hero/Hero";

export default function Boddy(props) {
    return (
        <div className='container main-container'>
            {props.children}
            <Hero />
        </div>
    )
}