import React, {useState} from 'react'
import styles from '../../styles/modules/form.module.scss'
import vision from '../../assets/vision.svg'

const Form = ({setPassword, strongPassword}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword); 
  }
  const handleChange = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    strongPassword? alert('Your password MEETS the conditions') : alert('Your password DOES NOT MEET the conditions')

  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Check for a strong password</h1>
      <form className={styles.form} action="">
        <label className={styles.label} htmlFor="password">
          Password:
        </label>
        <div className={styles.password}>
          <input className={styles.input} id="password" type={showPassword?'text':'password'} name="password" placeholder="Password" onChange={handleChange} />
          <button className={showPassword?styles['showButton']:styles['showButtonClicked']} onClick={handleShowPassword}><img src={vision} alt="vision" /></button>
        </div>
        <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
      </form>
    </div>
  )
}

export default Form