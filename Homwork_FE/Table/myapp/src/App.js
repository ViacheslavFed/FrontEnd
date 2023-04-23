import React, { useState } from 'react'
import FormTable from './Components/FormTable/FormTable'
import TaskList from './Components/TaskList/TaskList';
import './App.css'

function App() {
    let [tasks, setTasks] = useState([]);
    let [days, setDays] = useState([]);

    function addTask(event){
      event.preventDefault()
      let {day, importance, description} = event.target
      const newTask = {
        id: Date.now(),
        day: day.value,
        importance: importance.value,
        description: description.value
      }

        tasks = [...tasks, newTask]
        tasks.sort((a,b)=>b.importance - a.importance)
        setTasks(tasks)
        if(!days.includes(day.value)){days=[...days,day.value]}
        days.sort((a,b)=>(a-b))
        setDays(days)
    }

    const deletTask = (id)=>{
      tasks=tasks.filter(elem => elem.id != id)
      setTasks(tasks)
      const days=[];
      tasks.forEach(elem => {
        if(!days.includes(elem.day)){
            days.push(elem.day)
        }
    })
    setDays([...days])
}

const deletDay = (id)=>{
  days=days.filter(elem => elem != id)
  setDays(days)
}

  return (
    <div>
      <FormTable addTask={addTask}/>
      <TaskList tasks={tasks} days={days} deletTask={deletTask} deletDay={deletDay}/>
    </div>
  )
}

export default App