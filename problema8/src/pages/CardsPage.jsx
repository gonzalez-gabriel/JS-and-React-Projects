import React,{useState} from 'react'
import Cards from '../components/Cards/Cards'
import Form from '../components/Form/Form'
import styles from '../styles/modules/cardsPage.module.scss'

const CardsPage = () => {

  const [number, setNumber] = useState(1)
  return (
    <div className={styles.container}>
      <Form className={styles.form} setNumber={setNumber}/>
      <Cards className={styles.cards} number={number}/>
    </div>
  )
}

export default CardsPage