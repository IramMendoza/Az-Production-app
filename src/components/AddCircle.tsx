import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { InitialState } from "../interfaces"
import { circleAddedTable } from "../actions"
import circleAddImg from '../assets/check.png'

const AddCircle = () => {

  const dispatch = useDispatch()
  const circleState = useSelector<InitialState, boolean>( state => state.circleAdd)

  // Para cambiar el estado en automatico en cuanto desaparezca el circulo que avisa
  // cuando se añade correctamente la mesa al estado.
  if ( circleState === true ){
    setTimeout ( () => {
      dispatch(circleAddedTable())
      }, 1000
    )
  }

  return (
    <div>
      { 
        circleState === false ? <div/> : 
          
          <motion.img
            className=' w-[7rem] absolute'
            animate={{ y : [-200, 250, 250, 250, 250, 250, 250, 250, 250, -200] }}
            initial={{ y : 0, x : -50 }}
            transition={{ duration : 1 }}
            src={circleAddImg}
          />

      }
    </div>
  )
}

export default AddCircle
