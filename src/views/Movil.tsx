import { useSelector } from "react-redux"
import { AppState } from "../interfaces"
import Navbar from "../components/Navbar"
import Cart from "../components/Cart"
import Menu from "../components/Menu"
import Tables from "../components/Tables"
import Admin from "./Admin"


const Movil = () => {

  const menuTables = useSelector<AppState>(state => state.menuTables)
  //Utilizo el useSelector para traer el estado de la app y renderizar el componente segun el valor
  //menuTables. Es un condicional sencillo.
  //LO IMPORTANTE ES QUE USA LA INTERFACE APPSTATE PARA SABER QUE VIENE EN LA VARIABLE STATE

  return (
    <div>
      <Navbar/>
      <div className="flex">
        {menuTables === "tables" ? <Tables /> : <Menu />}
        <Admin/>
      </div>
      <Cart/>
    </div>
  )
}

export default Movil