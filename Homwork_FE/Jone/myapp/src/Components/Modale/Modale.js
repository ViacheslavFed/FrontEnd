import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Modale.module.css'

function Modale({active,setActive}) {
  return (
    <div className={active ? s.modale_menu_active : s.modale_menu}>
        <ul className={s.menu_list}>
            <li>
                <NavLink to='/' onClick={()=>setActive(!active)}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/works' onClick={()=>setActive(!active)}>Works</NavLink>
            </li>
            <li>
                <NavLink to='/blog' onClick={()=>setActive(!active)}>Blog</NavLink>
            </li>
            <li>
                <NavLink to='/contact' onClick={()=>setActive(!active)}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Modale