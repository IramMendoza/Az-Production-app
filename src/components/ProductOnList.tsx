import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { deleteProductFromList } from '../actions'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import Cross from '../assets/cross.png'

interface ProductOnList {
    product: string
    price: number
    amount: number
    id: number
}

const ProductOnList = ({product, price, amount} : ProductOnList) => {

  const animate = useAnimation()
  const dispatch = useDispatch()
  const variants = { 
    render : { x : 0 }
  }

  useEffect( () => {
    animate.start('render')
    }
    ,[]
  )

  function handleDelete () {
    dispatch(deleteProductFromList ( product ) )
  }

      // IMPORTANTE:
    // NO HAY QUE DARLES KEY A LOS ELEMENTOS QUE SE VAN RENDERIZANDO
    // YA QUE ESTO HACE QUE SE RENDERICEN CON CADA CAMBIO EN EL CART

  return (
    <AnimatePresence>
      <motion.div
      className=" flex justify-around bg-slate-100 rounded-2xl h-[23px] w-[95%] m-1 shadow-2xl" 
      initial={{ x : -300 }}
      animate={animate}
      variants={variants}
      transition={{ duration : 0.1 }}
      >
          <p className=" w-[68%] text-sm font-medium ml-2">{product}</p>

          <p className=' text-slate-700 text-sm mr-2'>{price}$</p>

          <motion.p 
            className=' text-slate-700 font-bold text-sm'
            initial={{ scale : 1 }}
            animate={{ scale : [2,1] }}
            transition={{ duration : 1 }}>
            x{amount}
          </motion.p>

          <div className=' w-[20px]'>
            <img
            onClick={handleDelete}
            src={Cross}/>
          </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default ProductOnList
