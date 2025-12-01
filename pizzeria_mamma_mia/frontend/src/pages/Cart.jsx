import React from 'react'
import { useState, useEffect } from 'react'
import { formatCurrency } from '../utils/formatCurrency'

const Cart = () => {

  const [ pizzas, setPizzas ] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
    .then((res) => res.json())
    .then((data) => {
      setPizzas(data)
      console.log(data)
    })
  }, [])
  
  // simular un carrito inicial
  const initialCart = pizzas.slice(0,6).map((pizza) => ({
    ...pizza,
     quantity: 1}))

  // declarar el estado inicial
  const [ cart, setCart ] = useState(initialCart)

  // incrementar cantidad de items
  const increaseQuantity = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) =>
         item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  // reduce la cantidad de items
  const decreaseQuantity = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0))
  }

  // calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="grid place-content-center">
        <h1 className="flex justify-center my-10 font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl ">Carrito de Compras:</h1>
        {cart.map((item) => (
          <div className="grid grid-cols-12 my-3 gap-3 text-xs md:text-base lg:text-base xl:text-base 2xl:text-base" key={item.id}>
            <img className="col-start-2 col-span-3 h-10 rounded-sm shadow-md shadow-slate-800 grid justify-center items-center" src={item.img} alt={item.name}></img>
            <h2 className="col-start-5 col-span-2 font-bold grid items-center">{item.name}</h2>
            <p className="col-start-7 col-span-1 grid justify-center items-center">${formatCurrency(item.price)}</p>
            <button onClick={() => decreaseQuantity(item.id)} className="col-start-9 col-span-1 min-w-full rounded-full bg-red-700 font-bold text-white grid justify-center items-center">-</button>
            <p className="col-start-10 col-span-1 grid justify-center items-center font-bold bg-gray-100 rounded-full text-slate-900">{item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)} className="col-start-11 col-span-1 min-w-full rounded-full bg-green-600 font-bold text-white grid justify-center items-center">+</button>
          </div>
        ))}
        <div className="flex justify-center items-center flex-col">
          <h3 className="mt-10 text-slate-900 font-bold text-base md:text-xl ">Total: ${formatCurrency(calculateTotal())}</h3>
          <button className="p-4 max-w-fit px-20 text-white bg-slate-900 font-bold text-sm md:text-base rounded-full flex items-center justify-center my-3">Pagar</button>
        </div>
    </div>
  )
}

export default Cart