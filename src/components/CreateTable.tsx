import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { InitialState, Product, Table } from "../interfaces"
import { addOrderToTable, changeCart, circleAddedTable } from "../actions"

const CreateTable = () => {
    
    const listPriceAndIcons = useSelector<InitialState, Product[]>(state => state.listPriceAndIcons)
    const tables = useSelector <InitialState, Table[]>( state => state.tables)
    const productList = useSelector <InitialState, Product[]>( state => state.productList)
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const [addToTable, setAddToTable] = useState(false)
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        // Actualizamos el estado con el valor actual del input
        setValue(e.target.value)
      }

    function handleAddToTable () {
        addToTable === false ? setAddToTable(true) : setAddToTable(false)
    }

    // Un condicional para evitar que se agreguen mesas sin productos o sin nombre del cliente
    function handleAddOrderToTable () {

        let isInTables = tables.some( (table) => table.client === value )

        if (value.length >= 3 && productList.length >= 1 && isInTables === false){
            let order = {
                productList : productList,
                listPriceAndIcons :listPriceAndIcons,
                tableNumber : tables.length +1,
                client : value,
            }
            dispatch(addOrderToTable( order ))
            dispatch(changeCart())
            dispatch(circleAddedTable())
        }
        else {

        }
    }

    return (
        <div>
            <div>

                {
                    addToTable === true ? <div/> : 

                    <div className="flex justify-center pb-1 pt-1">
                        <button 
                        className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white p-1 pl-2 pr-2 rounded-3xl"
                        onClick={handleAddToTable}>
                        Agregar a Mesa
                        </button>
                    </div>
                }

            </div>

            <div>

                {
                    addToTable === false ? <div /> :

                    <div className=" w-full flex justify-center m-1">
                        <div className=" bg-white w-[90%] rounded-2xl">

                            <p className=" text-center text-slate-700 pt-1">Nombe del Cliente</p>

                            <div className=" w-full flex justify-center pb-2 ">
                                <input
                                className=" text-center text-slate-700 bg-gradient-to-r from-slate-300 to-slate-200 rounded-2xl shadow-2xl"
                                value={value}
                                onChange={handleChange} />
                            </div>

                            <div className=" w-full flex justify-center pb-1">
                                <button 
                                className=" bg-gradient-to-r from-cyan-600 to-sky-600 text-white p-1 pl-2 pr-2 mb-1 rounded-3xl"
                                onClick={handleAddOrderToTable}>
                                Agregar Orden
                                </button>
                            </div>

                        </div>
                    </div>

                }

            </div>
        </div>
    )
}

export default CreateTable
