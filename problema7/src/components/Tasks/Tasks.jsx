import React from 'react'
import Task from '../Task/Task'
import styles from '../../styles/modules/tasks.module.css'

const Tasks = ({tasks, setSelectedTask, setTasks}) => {

  return (
    <div className={styles.container}>
      <h1>Tasks</h1>
      <div className={styles.tasks}>
        {tasks.map((task,i) =><Task setTasks={setTasks} setSelectedTask={setSelectedTask} key={i} data={task} tasks={tasks}/>)}
      </div>
    </div>
  )
}

export default Tasks