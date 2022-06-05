import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import styles from '../../styles/modules/form.module.css';

const Form = ({ addTask, selected, setSelected, tasks }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    date: '',
    priority: '',
    id: '',
  });

  const handleChange = (key) => (e) => {
    setTask({
      ...task,
      [key]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      const newTasks = tasks.map((taskItem) => {
        if (taskItem.id === selected.id) {
          return {
            ...taskItem,
            name: task.name,
            description: task.description,
            date: task.date,
            priority: task.priority,
          };
        }
        return taskItem;
      });
      addTask(() => newTasks);
      setSelected(null);
    } else {
      if (
        task.name === '' ||
        task.description === '' ||
        task.date === '' ||
        task.priority === ''
      ) {
        alert('Please fill all the fields');
      } else {
        addTask((prev) => {
          return [...prev, { ...task, id: uuid() }];
        });
        setSelected(null);
        
      }
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setTask({
      name: '',
      description: '',
      date: '',
      priority: '',
    });
  }

  useEffect(() => {
    if (selected) {
      setTask(selected);
    }
  }, [selected]);

  return (
    <div className={styles.container}>
      <h1>Form</h1>
      <form className={styles.form}>
        <label>
          <p>Name:</p>
          <input
            value={task.name}
            onChange={handleChange('name')}
            type="text"
            placeholder="Name"
          />
        </label>
        <label>
          <p>Date:</p>
          <input
            value={task.date}
            onChange={handleChange('date')}
            type="text"
            placeholder="Date"
          />
        </label>
        <label>
          <p>Priority:</p>
          <input
            value={task.priority}
            onChange={handleChange('priority')}
            type="number"
            placeholder="Priority"
          />
        </label>
        <label>
          <p>Description:</p>

          <input
            value={task.description}
            onChange={handleChange('description')}
            type="text"
            placeholder="Description"
          />
        </label>
        <button className={styles.button} onClick={handleSubmit}>ADD TASK</button>
        <button className={styles.button} onClick={handleClear}>CLEAR FIELDS</button>
      </form>
    </div>
  );
};

export default Form;
