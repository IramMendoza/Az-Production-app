import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { InitialState, Product, Table } from "../interfaces"
import { payOrder } from "../actions"

const PayOrder = () => {

    const currentOrder = useSelector<InitialState, Table>(state => state.currentOrder)
    const priceOrder = useSelector<InitialState, number>(state => state.priceCart)
    const productList = useSelector<InitialState, Product[]>(state => state.productList)
    const [moreOrLessPay, setMoreOrLessPay] = useState('')
    const [value, setValue] = useState<number>()
    const dispatch = useDispatch()

    let handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        // Actualizamos el estado con el valor actual del input
        // Hay que convertirlo en un un number antes de poder hacer los calculos del
        // cambio para el cliente
        let inputValue = e.target.value
        let inputValueAsANumber = parseInt(inputValue)
        setValue(inputValueAsANumber)
        if ( inputValueAsANumber < priceOrder ){
            setMoreOrLessPay(`Faltan : ${inputValueAsANumber - priceOrder}$`)
        }
        if ( inputValueAsANumber > priceOrder ){
            setMoreOrLessPay(`Devuelve al cliente : ${inputValueAsANumber - priceOrder}$`)
        }
        if ( inputValueAsANumber === priceOrder ){
            setMoreOrLessPay(`¡Perfecto!`)
        }
        if ( isNaN(inputValueAsANumber) ){
            setMoreOrLessPay('Coloca una cantidad')
        }
    }
    
    
    function handlePayOrder () {
        let currentClient = currentOrder.client
        dispatch( payOrder(currentClient))
    }

  return (

    <section className=" w-full">

        <div>
            { 
                currentOrder.client.length <= 2 
                
            ? 
                
                <>
                    <div className=" flex justify-center pt-2">
                        <p className=" text-2xl text-white">Orden :</p>
                        <p className=" text-2xl text-white font-semibold ml-2">Para Llevar</p>
                    </div>
                </> 
                
            :
            
                <>
                    <div className=" flex justify-center pt-2">
                        <p className=" text-2xl text-white">Cliente :</p>
                        <p className=" text-2xl text-white font-semibold ml-2">{currentOrder.client}</p>
                    </div>

                    <div className=" w-full flex justify-center">
                        <p className=" text-lg text-slate-300">Mesa :</p>
                        <p className=" text-lg text-slate-300 ml-1">{currentOrder.tableNumber}</p>
                    </div>
                </>

            }
        </div>

        <div>
            {
                currentOrder.productList.length === 0

            ?

                <>
                    <div className=" w-full flex justify-center">
                        <section className=" w-[70%] md:w-[35%]">
                            {
                                productList.map( (product) => {
                                    return (
                                        <div className=" flex w-[90%] justify-start">
                                            <p className=" w-[70%] text-slate-400 text-xs">{product.product}</p>
                                            <p className=" w-[15%] text-slate-400 text-center text-xs">${product.price}</p>
                                            <p className=" w-[15%] text-slate-400 text-center text-xs">x{product.amount}</p>
                                        </div>
                                    )
                                }
                            )
                        }
                            <p className=" text-slate-400 text-center font-bold pt-1">TOTAL : ${priceOrder}</p>
                        </section>
                    </div> 
                </>

            :

                <>
                    <div className=" w-full flex justify-center">
                        <section className=" w-[70%] md:w-[35%]">
                            {
                                currentOrder.productList.map( (product) => {
                                    return (
                                        <div className=" flex w-[90%] justify-start">
                                            <p className=" w-[70%] text-slate-400 text-xs">{product.product}</p>
                                            <p className=" w-[15%] text-slate-400 text-center text-xs">${product.price}</p>
                                            <p className=" w-[15%] text-slate-400 text-center text-xs">x{product.amount}</p>
                                        </div>
                                    )
                                }
                            )
                        }
                            <p className=" text-slate-400 text-center font-bold pt-1">TOTAL : ${priceOrder}</p>
                        </section>
                    </div>
                </>
            }
        </div>

        <p className=" w-full text-center text-white pb-2 p-1">¿Con que cantidad te estan pagando?</p>

        <div className=" w-full flex justify-around pb-1">
            <button className=" w-[45px] bg-emerald-500 rounded-md">
                $100
            </button>
            <button className=" w-[45px] bg-emerald-500 rounded-md">
                $200
            </button>
            <button className=" w-[45px] bg-emerald-500 rounded-md">
                $300
            </button>
            <button className=" w-[45px] bg-emerald-500 rounded-md">
                $400
            </button>
            <button className=" w-[45px] bg-emerald-500 rounded-md">
                $500
            </button>
        </div>

        <p className="w-full text-center text-slate-400 p-1">Otra Cantidad :</p>

        <div className=" w-full flex justify-center pb-2">
            <input
            className=" text-center text-slate-700 bg-gradient-to-r from-slate-300 to-slate-200 rounded-2xl shadow-2xl"
            value={value}
            type="number"
            onChange={handleChange} />
        </div>
        <div className=" w-full flex justify-center">
        <p className=" text-white text-2xl font-bold">{moreOrLessPay}</p>
        </div>

        <div className=" w-full flex justify-center pt-3 pb-5">
            <button 
            className=" bg-gradient-to-r from-teal-700 via-emerald-600 to-lime-600 text-2xl text-white p-3 rounded-3xl"
            onClick={handlePayOrder}>
                Cobrado
            </button>
        </div>


    </section>
  )
}

export default PayOrder
