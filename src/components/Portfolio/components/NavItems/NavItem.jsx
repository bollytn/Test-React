import './NavItem.css'

export default function NavItem(props) {
    return (
        <li className='nav-item'>
            {props.children}
        </li>
    )
}

function NavItemDropDown(props) {
    return (
        <li className='nav-item dropdown'>
            {props.children}
        </li>
    )
}

export { NavItemDropDown }