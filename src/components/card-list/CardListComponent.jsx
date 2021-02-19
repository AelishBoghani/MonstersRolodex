import React from 'react'
import './CardList.css'
import Card from '../card/CardComponent'
function CardListComponent(props) {
    console.log(props);
    return (
        <div className="card-list">
          {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
          ))}
        </div>
    )
}

export default CardListComponent

