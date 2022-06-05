import React from 'react'
import styles from '../../styles/modules/task.module.css'

const Task = ({data, tasks, setSelectedTask,setTasks}) => {
  
  const handleEdit = () => {
    setSelectedTask(data)
  }

  const handleDelete = () => {
    const newTasks = tasks.filter((task) => task.id !== data.id)
    setTasks(newTasks)
  }

  return (
    <div className={styles.container}>
      
      <h3><span> {data.name}</span></h3>
      <p><span>Description:</span> {data.description}</p>
      <p><span>Date:</span> {data.date}</p>
      <p><span>Priority:</span> {data.priority}</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleEdit}>EDIT</button>
        <button className={styles.button} onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  )
}

export default Task