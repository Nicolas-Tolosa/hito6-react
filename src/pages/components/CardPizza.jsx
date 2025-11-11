import React from 'react'
import { formatCurrency } from '../../utils/formatCurrency'

const CardPizza = ({ name, ingredients, price, img, desc }) => {
  return (
    <>
      <div>
        <img className="pizza_image" src={img} alt={name} />
        <h1>{name}</h1>
        <div>
          <h3>Ingredientes</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div >
      <div>
        <h2>Precio: ${formatCurrency(price)}</h2>
        <p>{desc}</p>
        <div>
          <button>Ver Más</button>
          <button>Añadir</button>
        </div>
      </div>
    </>
  )
}

export default CardPizza