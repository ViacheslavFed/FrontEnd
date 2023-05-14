import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header({active,setActive}) {
  return (
    <div className={s.header}>
        <ul className={s.menu_list}>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/works'>Works</NavLink>
            </li>
            <li>
                <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
        </ul>
        <div className={active ? s.burger_active : s.burger} onClick={()=>setActive(!active)}>
                <div className={s.line_first}></div>
                <div className={s.line_second}></div>
                <div className={s.line_tree}></div>
        </div>
    </div>
  )
}

export default Header