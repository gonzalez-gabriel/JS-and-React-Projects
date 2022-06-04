import React, {useState} from 'react'
import styles from '../../styles/modules/form.module.scss'


const Form = ({setNumber}) => {

  const [inputNumber, setInputNumber] = useState(1)
  
  const handleChange= (e)=>{
    setInputNumber(()=>e.target.value)
  }

  const create = (e) => {
    e.preventDefault();
    setNumber(()=>inputNumber);
  }
  
  return (
    <div className={styles.container}>
      <h1>IMAGE GALLERY</h1>
      <form >
      <p className={styles.paragraph}>Number of images</p>
        <div className={styles.form}>
          <select onChange={handleChange} className={styles.input} name="number" id="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
          <button onClick={create} className={styles.button} >CREATE IMAGES</button>
        </div>
      </form>
    </div>
  )
}

export default Form