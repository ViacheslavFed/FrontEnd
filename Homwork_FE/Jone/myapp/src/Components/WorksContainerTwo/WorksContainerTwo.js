import React from 'react'
import WorksItemTwo from '../WorksItemTwo/WorksItemTwo'
import s from './WorksContainerTwo.module.css'

function WorksContainerTwo({work_data}) {
  return (
    <div className={s.works_container}>
        {work_data.map(elem=><WorksItemTwo key={elem.id} {...elem}/>)}
    </div>
  )
}

export default WorksContainerTwo