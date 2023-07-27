import { useDispatch } from 'react-redux';
import { addProductToList } from '../actions';
import { ProductCardProps } from '../interfaces'


const ProductCard = ({ product, price, img, id } : ProductCardProps) => {

    const dispatch = useDispatch()

    function handleClickAdd () {
        dispatch( addProductToList( product ) )
    }
    // Dispatch para agregar el producto a productList en el reducer

    return (
        <div
        className=' bg-slate-200 md:bg-white rounded-2xl ml-3 mr-3 pb-2 md:shadow-inner shadow-2xl'
        key={id}
        >
            <div className='w-[15rem] md:w-[13rem]'>
                <img
                className=' rounded-t-2xl'
                src={img} 
                alt={product}
                />
            </div>

            <p 
            className=' md:text-sm text-center text-slate-800 font-bold mt-1'>
            {product}
            </p>

            <p
            className=' text-center text-slate-700'>
            {price}$
            </p>

            <div 
            className='flex justify-center'>
                <button
                className=' bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-1 px-2 rounded-2xl mt-1 mb-2'
                id='styleButton' 
                onClick={handleClickAdd}>Agregar</button>
            </div>

        </div>
    )
}

export default ProductCard

