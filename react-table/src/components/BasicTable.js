import React ,{useMemo} from 'react'
import {useTable} from 'react-table'
import { COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'

const BasicTable = () => {
  const colums = useMemo(()=> COLUMNS,[])
  const data = useMemo(()=> MOCK_DATA,[])
 const tableInstance = useTable({
    colums,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance
  return (
    <table {...getTableProps()}>
      <thead> {
        headerGroups.map((headerGroup)=>(
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map((colum) => (
                <th {...column.getHeaderGroupProps}

              ))

            }
            <th></th>
          </tr>

  ))}
       

      </thead>
      <tbody {...getTableBodyProps()}>
      <tr>
        <td></td>
      </tr>

      </tbody>
    </table>
  )
}

export default BasicTable