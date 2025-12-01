import React from 'react'
import { Link } from 'react-router-dom' // Importar Link de React Router
import { formatCurrency } from '../utils/formatCurrency'

const CardPizza = ({ pizza }) => {
  return (
    <div className="max-w-xs flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-50 dark:border-gray-100">
      <div className="h-40 object-cover overflow-hidden">
        <Link to={`/pizza/${pizza.id}`}> {/* Redirigir a la página de detalles de la pizza */}
          <img className="rounded-t-lg" src={pizza.img} alt={pizza.name} />
        </Link>
      </div>

      <div>
        <Link to={`/pizza/${pizza.id}`}> {/* Redirigir a la página de detalles de la pizza */}
          <h5 className="mb-2 mx-4 mt-2 text-2xl md:text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{pizza.name}</h5>
        </Link>
        <p className="mb-3 mx-4 font-normal text-gray-400 min-h-12">{pizza.ingredients.join(', ')}</p>
        <p className="mb-3 mx-4 font-normal text-gray-700 ">{pizza.desc}</p>
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mx-4"
          >
            Añadir: ${formatCurrency(pizza.price)}
          </button>

          <Link to={`/pizza/${pizza.id}`}> {/* Redirigir a la página de detalles de la pizza */}
            <button
              type="button"
              className="text-white bg-green-600 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-900 font-bold rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-800 dark:focus:bg-green-800 mx-4"
            >
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardPizza