import React from 'react'
import s from './Task.module.css'

function Task({id, day, importance, description, deletTask}) {
    const style = {background: importance === '1' ? '#E74C3C':'#1ABC9C'}
  return (

    <div style={style} className={s.task}>
      <div className={s.close} onClick={() => deletTask(id)}>x</div>
        <p>{description}</p>
    </div>
  )
}

export default Task