import { useSelector } from "react-redux"
import { InitialState } from "../interfaces"

const ClientOrder = () => {
    let client = useSelector<InitialState , string>(state => state.currentOrder.client)
    let tableNumber = useSelector<InitialState, number>(state => state.currentOrder.tableNumber) 
    return (
        <div>
            {
                client.length <= 3 ? 
                
                <div className=" w-full flex justify-center">
                    <p className=" text-2xl">Orden : Para llevar</p>
                </div> 
                
                :

                <div className=" mb-2">
                    <div className=" w-full flex justify-center">
                        <p className=" text-2xl">Orden : </p>
                        <p className=" font-semibold text-2xl ml-2">{client}</p>
                    </div>
                    <div className=" w-full flex justify-center">
                        <p className=" text-lg text-slate-700">Mesa : </p>
                        <p className=" text-lg text-slate-700 font-semibold ml-1">{tableNumber}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default ClientOrder
