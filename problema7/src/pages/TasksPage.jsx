import React,{useState, useEffect} from 'react'
import Form from '../components/Form/Form'
import Tasks from '../components/Tasks/Tasks'

const TasksPage = () => {

  const [selectedTask, setSelectedTask] = useState(null)
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div>
      <Form tasks={tasks} setSelected={setSelectedTask} selected={selectedTask} addTask={setTasks} />
      <Tasks setSelectedTask={setSelectedTask} tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default TasksPage