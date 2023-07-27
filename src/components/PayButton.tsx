import { useDispatch } from "react-redux"
import { goToPay } from "../actions"

const PayButton = () => {

  const dispatch = useDispatch()

  function handleChangeNavbar () {
    dispatch( goToPay () )
  }
  return (
    <div>
          <div className="flex justify-center pb-1 pt-2">
              <button 
              className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-1 pl-2 pr-2 rounded-3xl"
              onClick={handleChangeNavbar}>
                  Cobrar
              </button>
          </div>
    </div>
  )
}

export default PayButton
