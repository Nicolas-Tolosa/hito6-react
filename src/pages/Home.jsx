import { useState } from 'react'
import CardPizza from './components/CardPizza'
import Header from './components/Header'
import { pizzas as pizzaData } from '../data/pizzas.js'

const Home = () => {
  const [pizzas,] = useState(pizzaData);

  return (
    <>
      <Header />
      <div>
        {pizzas.map((pizza) => {
          return <CardPizza {...pizza} key={pizza.id} />
        })}
      </div>
    </>
  )
}

export default Home