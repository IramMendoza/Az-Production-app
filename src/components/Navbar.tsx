import { useDispatch, useSelector } from "react-redux"
import { motion, useAnimation } from "framer-motion"
import { changeToMenu } from "../actions"
import { changeToTables } from "../actions"
import { InitialState } from "../interfaces"
import Logo from '../assets/Logo menroz.png'
import UpIcon from '../assets/upIcon.png'
import Menu from '../assets/fast-food-Icon.png'
import TablesIcon from '../assets/tableIconPng.png'
import AddCircle from "../components/AddCircle"
import PayOrder from "./PayOrder"
import { changeNavbar } from "../actions"

const Navbar = () => {

  const dispatch = useDispatch()
  const animate = useAnimation()
  const navbarState = useSelector<InitialState, string>(state => state.navbar)
  const variants = {
    open : { y : [30,0] },
    close : { y : [30,0] }
  }

  // Debo esperar a que se renderice el componente para poder acceder a sus animaciones

  setTimeout( () => {
    if (navbarState === 'open'){
      animate.start('open')
    }
    if (navbarState === 'stop'){
      animate.stop()
    }
    else animate.start('close')
    }
  )

  // Se manda el stop al estado para detener la animacion, sino, siempre que se cambie de menu
  // a mesas, va a animarse.

  function handleClickMenu () {
    dispatch( changeToMenu() )
    dispatch( changeNavbar ('stop') )
  }

  function handleClickTables () {
    dispatch( changeToTables() )
    dispatch( changeNavbar ('stop') )
  }

  function handleChangeNavbar () {
    dispatch( changeNavbar('close'))
  }

  // El condicional funciona para poner un boton de salida al modo de pago del navbar

  return (
    <div className=" relative">
      <motion.div 
      className=" bg-gray-800 xsm:rounded-b-3xl sm:rounded-b-3xl shadow-2xl fixed top-0 w-full pb-2"
      variants={variants}
      animate={animate}
      initial={{ y : 0 }}
      transition={{ duration : 0.1 }}>

        <div>
          {
            navbarState === 'open' ? <PayOrder/> : <div/>
          }
        </div>

        <div className=" w-full flex justify-around">

          { navbarState === 'open' 
          
          ? 

            <div>
              <img className="w-[35px]"
              src={UpIcon}
              onClick={handleChangeNavbar}/>
            </div> 

          :

            <div className=" w-full flex justify-around">
              <img
              className="w-[20px] mt-3" 
              src={Logo}/>

              <img
              className="w-[30px] m-2 mr-1 mt-3"
              src={Menu}
              onClick={handleClickMenu}/>

              <img
              className=" text-white w-[35px] mt-3 mb-1"
              src={TablesIcon}
              onClick={handleClickTables}/>
            </div>
          }

        </div>

      </motion.div>
      
      <div className=" w-full flex justify-center">
        <AddCircle/>
      </div>
    </div>
  )
}

export default Navbar
