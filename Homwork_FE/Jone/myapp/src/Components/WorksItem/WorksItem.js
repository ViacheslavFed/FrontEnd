import React from 'react'
import s from './WorksItem.module.css'

function WorksItem({main_img,title,year,tags,text}) {
  return (
    <div className={s.work_item}>
        <img src={main_img} className={s.work_img}/>
        <div className={s.work_info}>
            <h2 className={s.work_title}>{title}</h2>
            <div className={s.work_discription}>
                <div className={s.work_year}>{year}</div>
                <p>{tags[0]}</p>
            </div>
            <p className={s.work_text}>{text}</p>
        </div>
    </div>
  )
}

export default WorksItem