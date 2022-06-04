import React, { useState, useLayoutEffect } from 'react';
import styles from '../../styles/modules/cards.module.scss';
import acordeon from '../../assets/acordeon.jpg';
import guitarra from '../../assets/guitarra.jpg';
import melodica from '../../assets/melodica.jpg';
import psr from '../../assets/psr.jpg';
import whitePiano from '../../assets/whitePiano.jpg';
import yamahaPiano from '../../assets/yamahaPiano.jpg';
import fundaYGuitarra from '../../assets/fundaYGuitarra.png';
import guitarraElectrica from '../../assets/guitarraElectrica.png';
import guitarras from '../../assets/guitarras.png';
import bateria from '../../assets/bateria.jpeg';
import bateriaElectronica from '../../assets/bateriaElectronica.webp';
import violin from '../../assets/violin.jpg';
import flauta from '../../assets/flauta.jpg';
import charango from '../../assets/charango.jpg';
import armonica from '../../assets/armonica.jpg';

const Cards = ({number}) => {
  const [cards, setCards] = useState([
    acordeon,
    guitarra,
    melodica,
    psr,
    whitePiano,
    yamahaPiano,
    fundaYGuitarra,
    guitarraElectrica,
    guitarras,
    bateria,
    bateriaElectronica,
    violin,
    flauta,
    charango,
    armonica,
  ]);
  const [cardsShuffle, setCardsShuffle] = useState([]);

  useLayoutEffect(() => {
   
      
      setCardsShuffle(()=>[])
      const arr = []
      for (let i = 0; i < number; i++) {
        arr.push(cards[i]);
      }
      setCardsShuffle(()=>arr)
    
  }, [number]);


  return (
    <div className={styles.container}>
      {cardsShuffle.map((image) => {
        return (
          <div
            className={styles[`card-${number}`]}
            key={image}
          >
            <img className={styles.image} src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
