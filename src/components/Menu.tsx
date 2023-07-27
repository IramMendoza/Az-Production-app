import { useSelector } from "react-redux"
import { InitialState } from "../interfaces"
import React from "react"
import ConteinerProductCard from "./ConteinerProductCard"
import ProductCard from "./ProductCard"
import chickenBurger from '../assets/burgerMini.jpeg'
import burger from '../assets/beefBurgerMini.jpeg'
import arracheraBurger from '../assets/arracheraBurgerMini.jpeg'
import fries from '../assets/friesMini.jpeg'
import boneless from '../assets/bonelessMini.jpeg'
import beer from '../assets/cervezaSolaMini.jpeg'
import michelada from '../assets/micheladaSencillaMini.jpeg'
import micheladaCubana from '../assets/micheladaMini.jpeg'
import guacamoleBurger from '../assets/guacamoleBurgerMini.jpeg'
import doubleBurger from '../assets/doubleBurgerFriesMini.jpeg'

const Menu : React.FC = () => {

  const circleState = useSelector<InitialState, boolean>( state => state.circleAdd )
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // La funcion mira con circleState para que cuando este renderice, nos lleve
  // hasta arriba en la pagina y se note si fue o no agregado correctamente
  // la orden a la mesa
  if ( circleState === true ){
    scrollToTop()
  }

  //No encontre una mejor manera de separar mas que dejar ese div
  return (
    <div className=" bg-slate-200 w-full h-full">
      <div className=" p-8"/> 
      
      <ConteinerProductCard title="Hamburguesas">
        <ProductCard product="Hamburguesa de Pollo" price={65} id='1' img={chickenBurger} />
        <ProductCard product="Hamburguesa de Res" price={75} id="2" img={burger} />
        <ProductCard product="Hamburguesa de Arrachera" price={85} id="3" img={arracheraBurger} />
        <ProductCard product="Hamburguesa de Guacamole" price={95} id='9' img={guacamoleBurger}/>
        <ProductCard product="Hamburguesa Doble" price={120} id="10" img={doubleBurger}/>
      </ConteinerProductCard>

      <ConteinerProductCard title="Complementos">
        <ProductCard product="Papas Fritas" price={45} id='4' img={fries} />
        <ProductCard product="Boneless" price={70} id="5" img={boneless} />
      </ConteinerProductCard>

      <ConteinerProductCard title="Bebidas">
        <ProductCard product="Cerveza Sola" price={65} id='6' img={beer} />
        <ProductCard product="Michelada Sencilla" price={75} id="7" img={michelada} />
        <ProductCard product="Michelada Cubana" price={85} id="8" img={micheladaCubana} />
      </ConteinerProductCard>
      
      <div className=" p-8 pb-[10rem]"/>
    </div>
  )
}

export default Menu
