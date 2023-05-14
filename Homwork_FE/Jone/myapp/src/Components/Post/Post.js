import React from 'react'
import s from './Post.module.css'

function Post({title,date,tags,text}) {
  const newDate = new Date(date)
  const formattedDate = newDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  
  return (
    <div className={s.post}>
            <h2>{title}</h2>
        <div className={s.post_h4}>
            <h4 className={s.date}>{formattedDate}</h4>
            <h4>{tags[0]}</h4>
        </div>
            <p>{text}</p>
    </div>
  )
}

export default Post