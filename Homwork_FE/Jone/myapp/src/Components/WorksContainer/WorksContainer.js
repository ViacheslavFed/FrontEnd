import React from 'react'
import WorksItem from '../WorksItem/WorksItem'
import s from './WorksContainer.module.css'

function WorksContainer({works}) {
  return (
    <div className='container'>
        {works.map(elem=><WorksItem key={elem.id} {...elem}/>)}
    </div>
  )
}

export default WorksContainer