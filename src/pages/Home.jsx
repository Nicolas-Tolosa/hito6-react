import CardPizza from './components/CardPizza'
import Header from './components/Header'

const Home = () => {
  return (
    <>
        <Header/>
        <CardPizza pizzaTitle={"Napolitana"} ingredients="Mozzarella, Tomate, Jamon, Oregano" price={8000}/>
    </>
  )
}

export default Home