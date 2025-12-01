import Header from '../pages/components/Header'
import CardPizza from '../components/CardPizza'
import { useEffect, useState } from 'react'
import Pizza from './Pizza'

const Home = () => {

  const [ pizzas, setPizzas ] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
    .then((res) => res.json())
    .then((data) => {
      setPizzas(data)
    })
  }, [])
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 grid-flow-row justify-items-center mx-auto md:mx-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-3 gap-3 mb-12" >
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza}></CardPizza>
        ))}
      </div>

      <div className="grid grid-cols-1 grid-flow-row justify-items-center mx-auto md:mx-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-3 gap-3 mb-12">
      </div>
    </div>
  )
}

export default Home