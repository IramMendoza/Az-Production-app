import { seeCurrentOrder,  } from "../actions"
import { useDispatch } from "react-redux"

interface TableProps {
  tableNumber: number
  client: string
}

const TableCard = ({tableNumber, client} : TableProps) => {

  const dispatch = useDispatch()

  function handleSeeCurrentOrder () {
    dispatch(seeCurrentOrder( client ))
  }

  return (
    <div 
    className=" bg-slate-200 rounded-2xl shadow-2xl h-[8rem] w-[14rem] px-[3rem] m-3">

      <div className=" flex justify-center pt-2">
        <p className=" text-slate-700 text-center mx-1">Mesa : </p>
        <p className=" font-semibold">{tableNumber}</p>
      </div>

      <div className=" w-full">
        <p className="  text-slate-700 w-full text-center">Cliente:</p>
        <p className=" w-full text-center font-semibold">{client}</p>
      </div>

      <div className=" flex justify-center">
        <button 
        className=" bg-gradient-to-r from-cyan-600 to-sky-600 text-white py-1 px-3 rounded-2xl m-2 mt-1 mb-3"
        onClick={handleSeeCurrentOrder}>
          Abrir
        </button>
      </div>
    </div>
  )
}

export default TableCard
