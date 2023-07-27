import { motion, useAnimation } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { deleteAllProductsFromList, changeCart } from "../actions"
import { InitialState, Table } from "../interfaces"
import TrashIcon from '../assets/trashIcon.png'
import ProductList from "./ProductList"
import IconsCart from "./IconsCart"
import PriceOrder from "./PriceOrder"
import CreateTable from "./CreateTable"
import PayButton from "./PayButton"
import ClientOrder from "./ClientOrder"
import UpdateOrder from "./UpdateOrder"

// Puede haber un problema con este componente en el futuro, por algun motivo cambia la posicion sin
// Razon aparente. Parece estar relaciondo con el componente Tables

const Cart = () => {

  const currentOrder = useSelector<InitialState, Table >(state => state.currentOrder)
  const cartState = useSelector<InitialState, String>( state => state.cart )
  const animate = useAnimation()
  const dispatch = useDispatch()
  const variants = {
    open : { y : [-30,0] },
    close : { y : [-30,0] }
  }


  function handleCart () {
    cartState === 'close' ? animate.start('close') : animate.start('open')
    dispatch(changeCart())
    console.log(cartState, )
  }

  function handleDeleteAll () {
    dispatch(deleteAllProductsFromList())
  }

  return (

    <motion.div
      className="backdrop-blur-sm bg-white/70 fixed bottom-0 w-screen rounded-t-3xl"
      initial={{ y : 0 }}
      animate={animate}
      variants={variants}
      transition={{ duration : 0.1 }}
    >
      <IconsCart handleCart={ handleCart }/>

        { cartState === 'close' ? <div/> : 

          <div>

            <ClientOrder/>

            <ProductList/>

            <PriceOrder/>

            <PayButton/>

            <div>
              {
                currentOrder.client.length >= 3 ? <UpdateOrder/> : <CreateTable/>
                
              }
            </div>


            <div className="flex justify-center pb-1 pt-1">
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 flex justify-center p-3 rounded-full">
                <img  className="w-[20px]"
                      src={TrashIcon} 
                      onClick={handleDeleteAll}/>
              </div>
            </div>

        </div>
      }
      
    </motion.div>
  )
}

export default Cart