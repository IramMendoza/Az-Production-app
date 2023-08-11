import axios from "axios"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { InitialState } from "../interfaces"
import { changeAdmin } from "../actions"

interface Product {
  product : string,
  amount : number,
}

interface Order {
  client : string,
  products : Product[]
  total : number,
}

const Admin = () => {
  const [jsonResponse, setJsonResponse] = useState<Order[]>([])
  const [error, setError] = useState<string>("")
  const adminState = useSelector((state: InitialState ) => state.admin)
  const animate = useAnimation()
  const dispatch = useDispatch()
  const variants = {
    open : { y : [-30,0] },
    close : { y : [-30,0] }
  }

  function handleClickAdmin () {
    dispatch( changeAdmin('close'))
  }

  useEffect( () => {
    axios
    .get("http://localhost:8000/api_az_app/")
    .then(response => setJsonResponse(response.data))
    .catch(error => setError(error))
    }, []
  )

  return (

    <motion.div 
    className="backdrop-blur-sm bg-white/70 fixed bottom-0 w-screen rounded-t-3xl"
    initial={{ y : 0 }}
    animate={animate}
    variants={variants}
    transition={{ duration : 0.1 }}>

      { adminState === 'close' ? <></> :

      <>
      <button
      onClick={handleClickAdmin}
      >X
      </button>
        <p>{error}</p>
        <div>
          {
            jsonResponse.map((order) => {
              return (
                <div>
                  <p>Cliente: {order.client}</p>
                  <div>
                    {
                      order.products.map((product) => {
                        return (
                          <div>
                            <p>Producto: {product.product}</p>
                            <p>Cantidad : {product.amount}</p>
                          </div>
                          )
                        }
                      )
                    }
                  </div>
                  <p>Total: {order.total}</p>
                  <hr/>
                </div>
                )
              }
            )
          }
        </div>
      </>
    }

    </motion.div>
  )
}

export default Admin
