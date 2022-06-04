import React from 'react'
import styles from '../../styles/modules/pokemonCard.module.scss'
import notFound from '../../assets/notFound.jpg'

const PokemonCard = ({pokemon}) => {
  return (
    <div className={styles.pokemonCard}>
      <h1 className={styles.name}>{pokemon.name?pokemon.name : 'Pokemon'}</h1>
      <figure className={styles.image}>
        <img src={pokemon.image} onError={(event)=>event.target.src=notFound}alt={pokemon.name}/>
      </figure>
      <div className={styles.info}>
        <p className={styles.number}>Number: {pokemon.number}</p>
        {pokemon.type.map((t,i) => <p className={styles.type} key={i}>Type: {t}</p>)}
        <p className={styles.weight}>Weight: {pokemon.weight}</p>
        <p className={styles.height}>Height: {pokemon.height}</p>
      </div>
    </div>
  )
}

export default PokemonCard