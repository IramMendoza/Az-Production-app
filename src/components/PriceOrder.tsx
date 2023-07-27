import { useSelector } from "react-redux"
import { InitialState } from "../interfaces"

const PriceOrder = () => {

    const priceOrder = useSelector<InitialState, number>( state => state.priceCart )

    return (
        <div>
            { 
                priceOrder === 0 ? <div/> : 
                    <div className=" flex justify-center">
                        <p className=" w-[95%] bg-white px-3 pb-2 rounded-b-2xl font-semibold text-center text-2xl">
                            TOTAL : ${priceOrder}
                        </p>
                    </div>
            }
        </div>
    )
}

export default PriceOrder
