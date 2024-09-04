import React, { useRef, useEffect, useContext } from 'react'
import { AppContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links }, closeSubmenu } = useContext(AppContext)
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])

  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      onMouseLeave={closeSubmenu}>

      <h4>{page}</h4>
      <div className='submenu-center col-2'>

        {links.map((link, index) => {
          const { label, icon, url } = link
          return <a key={index} href={url}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </aside>
  )
}

export default Submenu