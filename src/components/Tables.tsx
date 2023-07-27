import { useSelector } from "react-redux"
import { InitialState, Table } from "../interfaces"
import TableList from "./TableList"

const Tables = () => {
  const tables = useSelector<InitialState, Table[]>(state => state.tables)
  const circleState = useSelector<InitialState, boolean>( state => state.circleAdd )
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  scrollToTop()

  // El condicional trae el estado de circleState para que cuando este renderice, nos lleve
  // hasta arriba en la pagina y se note si fue o no agregado correctamente
  // la orden a la mesa
  if ( circleState === true ){
    scrollToTop()
  }

  // El condicional nos sirve por si el numero de mesas registradas es cero,
  // Renderice solamente que no hay mesas aun

  // Debajo de tableList esta un div vacio que sirve como relleno para la pagina
  return (
    <div className=" bg-slate-300 w-full h-full">
      <div className=" pb-[4rem]"/>

      <div>
        { tables.length === 0 ? 

        <div className=" w-full h-screen flex justify-center bg-slate-300">
          <div className=" py-[15rem]">
            <p className=" text-center text-slate-700 text-base font-bold">No hay mesas en servicio</p>
          </div>
        </div> 
        
        : 
        
        <div className=" w-full">
            <TableList/>
            <div className=" w-full md:h-screen h-[20rem] bg-slate-300"/>
        </div>

        }
      </div>
    </div>
  )
}

export default Tables
