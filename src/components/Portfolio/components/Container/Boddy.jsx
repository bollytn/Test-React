import './container.css'

export default function Boddy(props) {
    return (
        <div className='container main-container'>
            {props.children}
        </div>
    )
}