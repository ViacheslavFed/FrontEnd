import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './WorksItemTwo.module.css'

function WorksItemTwo({id,main_img,title,year,tags,text}) {
   const link = `/works/${id}`
  return (
    <div className={s.works_item}>
        <NavLink to={link}>
            <img src={main_img} className={s.works_img}/>
        </NavLink> 
        <div className={s.works_info}>
        <NavLink to={link}>
            <h2 className={s.works_title}>{title}</h2>
        </NavLink>
        <div className={s.works_discription}>
            <div className={s.works_year}>{year}</div>
            <p>{tags[0]}</p>
        </div>
            <p className={s.work_text}>{text}</p>
        </div>
    </div>
  )
}

export default WorksItemTwo