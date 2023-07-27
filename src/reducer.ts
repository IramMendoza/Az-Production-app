import { CHANGE_CART, CHANGE_TO_MENU, GO_TO_PAY } from "./actions"
import { CIRCLE_ADDED_TABLE } from "./actions"
import { CHANGE_TO_TABLES } from "./actions"
import { ADD_PRODUCT_TO_LIST } from "./actions"
import { DELETE_PRODUCT_FROM_LIST } from "./actions"
import { DELETE_ALL_PRODUCTS_FROM_LIST } from "./actions"
import { ADD_ORDER_TO_TABLE } from "./actions"
import { SEE_CURRENT_ORDER } from "./actions"
import { UPDATE_TABLE } from "./actions"
import { CHANGE_NAVBAR } from "./actions"
import { PAY_ORDER } from "./actions"
import { Action, InitialState, Product, Table } from "./interfaces"
import { products } from "./products"
import { Reducer } from "redux"


const initialState : InitialState = {
    menuTables : 'menu',
    productList : [],
    cart : 'close',
    listPriceAndIcons : [],
    priceCart : 0,
    tables : [],
    circleAdd : false,
    currentOrder : {
        productList : [],
        listPriceAndIcons : [],
        client : '',
        tableNumber : 0
    },
    navbar : 'close'
}


const reducer : Reducer = ( state = initialState, action : Action ) => {
    switch (action.type) {

        case CHANGE_TO_MENU :
            return { ...state, 
                menuTables : 'menu',
                circleAdd : false }
        
        case CHANGE_TO_TABLES :
            return { ...state, 
                menuTables : 'tables', 
                circleAdd : false }

        case ADD_PRODUCT_TO_LIST :
        // Buscar el producto que coincide con el payload
        let productToAdd = products.find( (product) => product.product === action.payload )
        // Verificar si el producto ya está en la lista
        let productCopy = { ...productToAdd } as Product
        //Saco una copia del producto para que pueda sumar +1 cada vez que es agregado el producto
        let isInProductList = state.productList.some( (product : Product) => product.product === productCopy.product)
        // Si el producto está en la lista y se encontró
        if (isInProductList && productToAdd) {
            // Busco el pruducto dentro de productList para tomar la cantidad que tiene 
            let productFinded = state.productList.find( (product : Product) => product.product === action.payload) as Product
            // Crear una copia del producto con la cantidad incrementada
            let updatedProduct = { ...productFinded, amount: productFinded.amount + 1 }
            // Crear un nuevo array con el producto actualizado y los demás iguales
            let updatedProductList = state.productList.map( (product : Product) => product.product === productCopy.product ? updatedProduct : product )
            // Devolver el nuevo estado con el array actualizado
            // ESTA PARTE ES PARA SACAR EL TOTAL DEL PRECIO
            let updatedListPriceAndIcons = [...state.listPriceAndIcons, productToAdd]
            let totalPrice = updatedListPriceAndIcons.reduce((total, product) => total + product.price, 0)

            return { ...state, productList: updatedProductList, 
                    listPriceAndIcons: [... state.listPriceAndIcons, productToAdd],
                    priceCart : totalPrice }
        }
        // Si el producto no está en la lista y se encontró
        else if (!isInProductList && productToAdd) {
            // Devolver el nuevo estado con el producto agregado al array
            let updatedListPriceAndIcons = [...state.listPriceAndIcons, productToAdd]
            let totalPrice = updatedListPriceAndIcons.reduce((total, product) => total + product.price, 0)
            return { ...state, productList: [...state.productList, productCopy],
                    listPriceAndIcons: [... state.listPriceAndIcons, productToAdd],
                    priceCart : totalPrice}
        }
        // Si no se encontró el producto
        else {
            // Devolver el mismo estado sin cambios
            return { ...state }
        }

        case DELETE_PRODUCT_FROM_LIST:
            // Hay que sacar una copia de productList para poder modificarla
            let updatedProductList = state.productList.filter( (product : Product) => product.product !== action.payload )
            let updatedListPriceAndIcons = state.listPriceAndIcons.filter ( (product : Product) => product.product !== action.payload )
            let totalPrice = updatedListPriceAndIcons.reduce((total : number, product : Product) => total + product.price, 0)
            return {... state, productList: updatedProductList,
                    listPriceAndIcons : updatedListPriceAndIcons,
                    priceCart : totalPrice }

        case DELETE_ALL_PRODUCTS_FROM_LIST:
            let clearProductList: Array<Product> = []
            return {...state, productList : clearProductList,
                    listPriceAndIcons : clearProductList,
                    priceCart : 0,
                    currentOrder : initialState.currentOrder }
        
        case ADD_ORDER_TO_TABLE:
            let order : Table = action.payload
            let emptyProductList : Array<Product> = []
            console.log(order)
            return { ...state, tables: [...state.tables, order],
                    productList : emptyProductList,
                    listPriceAndIcons : emptyProductList,
                    priceCart : 0,
                    }

        case CHANGE_CART:
            if (state.cart === 'open'){
                return { ...state, cart : 'close' }
            }
            else 
                return { ...state, cart : 'open' }
            
        case CIRCLE_ADDED_TABLE:
            if ( state.circleAdd === false){
                return { ...state, circleAdd : true }
            }
            else
                return { ...state, circleAdd: false }

        case SEE_CURRENT_ORDER:
            let currentOrder = state.tables.find( (table : Table) => table.client === action.payload)
            let totalPriceUpdated = currentOrder.listPriceAndIcons.reduce((total : number, product : Product) => total + product.price, 0)
            return {... state, 
                    productList : currentOrder?.productList || [],
                    currentOrder : currentOrder,
                    listPriceAndIcons : currentOrder?.listPriceAndIcons,
                    priceCart : totalPriceUpdated,
                    cart : 'open' }
        
        case UPDATE_TABLE:
            let updatedOrder : Table = action.payload
            console.log(updatedOrder)
            let filteredList = state.tables.filter((table : Table) => table.client !== updatedOrder.client)
            filteredList.push(updatedOrder)
            let newProductList : Product[] = []
            return {
                ...state,
                tables : filteredList,
                currentOrder : initialState.currentOrder,
                productList : newProductList,
                listPriceAndIcons : newProductList,
                circleAdd : true,
                priceCart : 0,
                cart : 'close',
            }
        
        case CHANGE_NAVBAR:
            return {
                ...state,
                navbar : action.payload,
                circleAdd : false
            }
        
        case GO_TO_PAY:
            return {
                ...state,
                navbar : 'open',
                cart : 'close'
            }
        
        case PAY_ORDER:
            let currentClient = action.payload
            let isInTables = state.tables.some( (table : Table) => table.client === currentClient )
            if ( isInTables ){
                let updatedTables = state.tables.filter( (table : Table) => table.client !== currentClient )
                return {
                    ...state,
                    productList : [],
                    listPriceAndIcons : [],
                    cart : 'close',
                    priceCart : 0,
                    circleAdd : true,
                    currentOrder : initialState.currentOrder,
                    navbar : 'close',
                    tables : updatedTables
                }
            }

            else
            return {
                ...state,
                productList : [],
                listPriceAndIcons : [],
                cart : 'close',
                priceCart : 0,
                circleAdd : true,
                currentOrder : initialState.currentOrder,
                navbar : 'close'
            }


        default:
            return state
    }
}

export default reducer