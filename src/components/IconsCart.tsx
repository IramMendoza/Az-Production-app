import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { InitialState, Product } from "../interfaces"
import Burger from '../assets/burger.png'
import Beer from '../assets/beer.png'
import Fries from '../assets/french-fries.png'

interface Props {
    handleCart: () => void
}

const IconsCart = ({ handleCart } : Props) => {

    const listPriceAndIcons = useSelector<InitialState, Product[]>(state => state.listPriceAndIcons)
    
    // IMPORTANTE:
    // NO HAY QUE DARLES KEY A LOS ELEMENTOS QUE SE VAN RENDERIZANDO
    // YA QUE ESTO HACE QUE SE RENDERICEN CON CADA CAMBIO EN EL CART

    return (
    <div 
    className="w-full flex justify-center"
    onClick={handleCart}>
            {
                listPriceAndIcons.length === 0 ? <p className=" text-center font-medium text-lg mt-2 mb-2 p-1">Vacio</p> :

                    <div className=" flex justify-center overflow-x-auto w-[85%]">
                        {
                            listPriceAndIcons.map( (product => {
                                
                                return (
                                    <motion.div 
                                    className=" w-[32px] m-2 my-3"
                                    initial={{ scale : 1 }}
                                    animate={{ scale : [1,1.5,1] }}
                                    transition={{ duration : 0.2 }}
                                    >
                                        {product.type === 'burger' ? <img src={Burger} /> : <div />}
                                        {product.type === 'beer' ? <img src={Beer} /> : <div />}
                                        {product.type === 'complement' ? <img src={Fries} /> : <div />}
                                    </motion.div>
                                )
                            }
                            )
                            )
                        }
                    </div>
            }
    </div>
  )
}

export default IconsCart
