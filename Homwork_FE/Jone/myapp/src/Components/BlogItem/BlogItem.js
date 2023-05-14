import React from 'react'
import s from './BlogItem.module.css'

function BlogItem({title,date,tags,text}) {
    const newDate = new Date(date)
    const formattedDate = newDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  return (
    <div>
        <h2 className={s.blog_h2}>{title}</h2>
        <div className={s.blog_h4}>
            <h4 className={s.blog_date}>{formattedDate}</h4>
            <h4>{tags}</h4>
        </div>
        <p className={s.blog_p}>{text}</p>
    </div>
  )
}

export default BlogItem