import React from 'react'
import DayItem from '../DayItem/DayItem'
import Task from '../Task/Task'

function TaskList({tasks,days,deletTask,deletDay}) {
    

  return (
    <div>
        {days.map(elem => <DayItem day={elem} tasks={tasks} deletTask={deletTask} deletDay={deletDay} key={elem} />)}
    </div>
  )
}

export default TaskList