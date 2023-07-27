import { useSelector } from "react-redux"
import { InitialState, Table } from "../interfaces"
import TableCard from "./TableCard"

const TableList = () => {

    const tables = useSelector<InitialState, Table[]>(state => state.tables)

    return (
            <div className=" w-full flex sm:flex-wrap xsm:flex-col overflow-x-auto pb-[6rem]">
            {
                tables.map ( (table) => {
                    return (
                        <div className=" flex justify-center">
                            <TableCard
                            tableNumber={table.tableNumber}
                            client={table.client}
                            />
                        </div>
                        )
                    }
                )
            }
            </div>
    )
}

export default TableList
