import React from 'react';
import Card from './Card';
import CardsStyles from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const listCiudades = props.cities.map((city, i) => (
    <Card
    id = {city.id}
    key = {city.id}
    name={city.name} 
    max={city.max} 
    min={city.min}
    img={city.img}
    onClose={props.onClose}
    />
    )
  )
  return (
    <div className={CardsStyles.cards}>{listCiudades}</div>
  )
};