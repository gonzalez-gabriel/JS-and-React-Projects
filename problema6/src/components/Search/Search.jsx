import React,{useState} from 'react'
import axios from 'axios'
import styles from '../../styles/modules/search.module.scss'


const Search = ({setPokemon}) => {
  const [search,setSearch] = useState('')

  const searchPokemon = (e) => {
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(res => {
      setPokemon({
        name:res.data.name,
        number:res.data.id,
        type:res.data.types.map(t => t.type.name),
        weight:res.data.weight,
        height:res.data.height,
        image:res.data.sprites.other.dream_world.front_default ||res.data.sprites.front_default
      })
    })
    .catch(err => setPokemon({
      name:'Pokemon',
      number:'',
      type:[''],
      weight:'',
      height:'',
      image:''
    })) 

  }

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="pokemon">
          <p>Search your pokemon</p>
          <input className={styles.input} id="pokemon" type="text" name="pokemon" placeholder="Pokemon" onChange={handleChange}/>
        </label>
        <button className={styles['search-button']} onClick={searchPokemon}>SEARCH</button>
      </form>
    </div>
  )
}

export default Search