import React from 'react'
import WorksContainerTwo from '../../Components/WorksContainerTwo/WorksContainerTwo'
import {work_data} from '../../data'
import s from './WorksPage.module.css'


function WorksPage() {
  return (
    <div className='container'>
      <h2>Works</h2>
      <WorksContainerTwo work_data={work_data}/>
    </div>
  )
}

export default WorksPage