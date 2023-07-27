import { useDispatch, useSelector } from "react-redux"
import { InitialState, Product, Table } from "../interfaces"
import { updateTable } from "../actions"


const UpdateOrder = () => {

    const dispatch = useDispatch()
    const currentOrder = useSelector<InitialState, Table>(state => state.currentOrder)
    const productList = useSelector<InitialState, Product[]>(state => state.productList)
    const listPriceAndIcons = useSelector<InitialState, Product[]>(state => state.listPriceAndIcons)

    const updatedOrder = {
        client : currentOrder.client,
        productList : productList,
        listPriceAndIcons : listPriceAndIcons,
        tableNumber : currentOrder.tableNumber
    }

    function handleUpdateOrder () {
        dispatch( updateTable (updatedOrder) )
    }

  return (
    <div className=" w-full flex justify-center">
        <button 
        className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white p-1 pl-2 pr-2 rounded-3xl"
        onClick={handleUpdateOrder}>
            Actualizar
        </button>
    </div>
  )
}

export default UpdateOrder
