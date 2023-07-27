import { useSelector } from "react-redux"
import { InitialState, Product } from "../interfaces"
import ProductOnList from "./ProductOnList"

const ProductList = () => {

    const productList = useSelector<InitialState, Product[]>(state => state.productList)

    return (
        
        <div className=" flex justify-center w-full">
            
            {
                productList.length >= 1 ?

            <div className=" bg-white w-[95%] py-4 rounded-t-2xl">
                {
                    productList.map( (product) => {
                        return (
                            <div className=" flex justify-center w-full">
                                <ProductOnList
                                product={product.product}
                                price={product.price}
                                amount={product.amount}
                                id={product.id}
                                />
                            </div>
                            )
                        }
                    )
                }
            </div>

            : <div/>

            }
        </div>
    )
}

export default ProductList
