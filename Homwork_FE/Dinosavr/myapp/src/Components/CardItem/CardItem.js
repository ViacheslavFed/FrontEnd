import React from 'react'
import s from './CardItem.module.css'


function CardItem({text,background}) {
  return (
    <div className={s.cardItem} style={{background:background}}>
        <hr/>
        <h3>{text}</h3>
    </div>
  )
}

export default CardItem