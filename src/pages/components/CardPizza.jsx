import React from 'react'
import { formatCurrency } from '../../utils/formatCurrency'

const CardPizza = ({pizzaTitle, ingredients, price }) => {
  return (
    <>
    <div>
        <img className="pizza_image" src="../../public/napolitana.webp" alt=""/>
        <h1>{pizzaTitle}</h1>
        <div>
            <h3>Ingredientes</h3>
            <p>{ingredients}</p>
        </div>
    </div>
    <div>
        <h2>Precio: ${formatCurrency(price)}</h2>
        <div>
            <button>Ver Más</button>
            <button>Añadir</button>
        </div>
    </div>
    </>
  )
}

export default CardPizza