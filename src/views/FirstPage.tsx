import { motion } from 'framer-motion'
import  { Link } from 'react-router-dom'
import LogoMenroz from '../assets/Logo menroz.png'

const FirstPage = () => {
  return (
    <div className=' w-screen h-screen bg-neutral-900'>

        <div className=' flex justify-center pt-10'>
            <motion.img
            initial={{ x : -200 }}
            animate={{ x : 0 }}
            className=' w-[25%] lg:w-[15%] md:w-[20%]'
            src={LogoMenroz}/>
        </div>

        <motion.div
        initial={{ y : 500 }}
        animate={{ y : 0 }} 
        className=' flex justify-center text-white font-sans font-semibold mt-5 lg:text-2xl md:text-lg'>
            <p>¿Estas utilizando un ..</p>      
        </motion.div>
 
        <motion.div
        initial={{ y : 500 }}
        animate={{ y : 0 }}
        className=' md:flex md:justify-around xsm:flex xsm:flex-col sm:flex sm:flex-col text-white text-xl'>
            <div className=' xsm:w-full xsm:flex justify-center mt-3'>
                <Link to='/desktop' 
                className='  bg-emerald-700 p-2 rounded-xl xsm:w-[35%] xsm:text-lg text-center'>
                    Laptop / Tablet
                </Link>
            </div>
            <div className=' xsm:w-full xsm:flex justify-center mt-3'>
                <Link to='/Movil' className='  bg-emerald-700 p-2 rounded-xl xsm:w-[35%] xsm:text-lg text-center'>
                    Movil
                </Link>
            </div>
        </motion.div>

    </div>
  )
}

export default FirstPage
