import React, { useEffect } from 'react'
import Header from './components/Header' 
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'
import { useState } from "react";

 

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  // fetch task
  const fetchTasks = async () => {
    const res = await fetch('https://locahost:3000/tasks')
    const data = await res.json()
    return data 
  }

// add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}
// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id  !== id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask
        (!showAddTask)} showAdd = {showAddTask} />  
      {showAddTask && <AddTasks onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks= {tasks} onDelete = {deleteTask} 
      onToggle= {toggleReminder} />: 'No task to show.'}
    </div>
  )
}
// JSON.stringify turns javascript object into json string 
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }
export default App
