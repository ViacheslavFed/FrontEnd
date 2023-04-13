import React from 'react'
import CardItem from '../CardItem/CardItem';
import s from './CardList.module.css'


const array = [{
        text:'Годовое ТО',
        background: '#22356F'
    },
    {
        text:'Выравнивание колес',
        background: '#0052C1'
    },
    {
        text:'Настройка переключателей',
        background: '#76B58B'
    }];

function CardList() {
  return (
    <div className={s.cardList}>
        {array.map(elem => <CardItem {...elem} key={elem.text}/>)}
    </div>
  )
}

export default CardList