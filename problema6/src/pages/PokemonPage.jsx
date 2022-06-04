import React,{useState} from 'react'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import Search from '../components/Search/Search'
import styles from '../styles/modules/pokemonPage.module.scss'

const PokemonPage = () => {
  const [pokemon,setPokemon] = useState({
    name:'',
    number:'',
    type:[''],
    weight:'',
    height:'',
    image:''
  })
  return (
    <div className={styles.pokemon}>
      <h1 className={styles.title}>POKEDEX</h1>
      <div className={styles.content}>
        <Search setPokemon={setPokemon}/>
        <PokemonCard pokemon={pokemon}/>
      </div>
    </div>
  )
}

export default PokemonPage