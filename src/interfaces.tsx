export interface Action {
  type : string
  payload? : any 
  }

export interface ProductBasic {
  type : string
  price : number
}

export interface Table {
  listPriceAndIcons : Product[]
  productList : Product[]
  client : string
  tableNumber : number
}

export interface Tables {
  tables: Table[]
}

export interface InitialState {
  menuTables : string
  productList : Product[]
  cart : string
  listPriceAndIcons : Product[]
  priceCart : number
  tables : Table[]
  circleAdd : boolean 
  currentOrder : Table
  navbar : string
}

export interface ProductCardProps {
  product: string
  price: number
  img: string
  id: string
  }

export interface Product {
  product: string
  type: string
  price: number
  amount: number
  id: number
  img: string
  }

export interface AppState { 
  menuTables: string
  }

export interface Products {
  products: Array<Product>
}