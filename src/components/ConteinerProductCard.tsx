import { ReactNode } from "react"

interface Props {
    children : ReactNode
    title : string
}

const ConteinerProductCard= ({ children, title } : Props ) => {
  return (
    <div className=" md:pt-2">
        <h1 
        className=" text-slate-800 md:text-3xl text-4xl font-semibold text-center">
        {title}
        </h1>
        <div className=" flex justify-center w-full">
            <div className=" w-full flex overflow-x-auto pt-5 md:pt-1 pb-[4rem] md:pb-2 ">
                {children}
            </div>
        </div>
    </div>
  )
}

export default ConteinerProductCard
