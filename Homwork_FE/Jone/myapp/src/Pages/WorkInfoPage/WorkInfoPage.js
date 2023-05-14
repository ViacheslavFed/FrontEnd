import React from 'react'
import { useParams } from 'react-router-dom'
import {work_data} from '../../data'
import s from './WorkInfoPage.module.css'

function WorkInfoPage() {
  const {id}=useParams()
  const { full_title, year, tags, text, content } = work_data[id - 1]
  return (
    <div className='container'>
    <div className={s.info_page}>
          <h2 className={s.info_h2}>{full_title}</h2>
    <div className={s.info_flex}>
        <div className={s.info_year}>{year}</div>
        <h2 className={s.info_tags}>{tags}</h2>
    </div>
        <p className={s.info_text}>{text}</p>
        <div className={s.info_content}>
            {content.map(elem => {
              if(elem[0]=='h1'){
                return <h1>{elem[1]}</h1>
              }
              else if(elem[0]=='img'){
                return <img className={s.info_img} src={elem[1]}/>
              }
              else if(elem[0]=='h2'){
                return <h2>{elem[1]}</h2>
              }
              else if(elem[0]=='text'){
                return <p>{elem[1]}</p>
              }
            })}
        </div>
    </div>
    </div>

  )
}

export default WorkInfoPage