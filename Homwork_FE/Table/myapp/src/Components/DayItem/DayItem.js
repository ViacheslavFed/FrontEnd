import React from 'react'
import Task from '../Task/Task'
import s from './DayItem.module.css'

function DayItem({day,tasks,deletTask,deletDay}) {
    const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
  return (
    <div className={s.dayItem}>
        <div className={s.close_x} onClick={()=>deletDay(day)}>x</div>
        <div className={s.day}>{week[day]}</div>
        <div className={s.tasks}>
            {tasks.map(elem => {
                if (elem.day == day){
                    return <Task {...elem} deletTask={deletTask} deletDay={deletDay} key = {elem.id}/>
                }
            })}
        </div>
    </div>
  )
}

export default DayItem