import React ,{useMemo} from 'react'
import {useTable} from 'react-table'
import { COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'

const BasicTable = () => {
  const columns = useMemo(()=> COLUMNS,[])
  const data = useMemo(()=> MOCK_DATA,[])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  }= useTable({
    columns,
    data
  })


  return (
    <table  className='border-collapse border border-slate-400' {...getTableProps()}>
      <thead> {
        headerGroups.map((headerGroup)=>(
          <tr {...headerGroup.getHeaderGroupProps()} >
            {
              headerGroup.headers.map((column) => (
                <th {...column.getHeaderGroupProps()}>{column.render('Header')}</th>

              ))

            }
            <th></th>
          </tr>

  ))}
       

      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row =>{
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell)=>{
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>

            )
          })
        }
      <tr>
        <td></td>
      </tr>

      </tbody>
      <tfoot>
        {
          footerGroups.map(footerGroup=>(
            <tr {...footerGroup.getFooterGroupProps()}>
              {
                footerGroup.headers.map(column=> (
                  <td {...column.getFooterGroupProps}>
                    {
                      column.render('Footer')
                    }
                  </td>
                ))
              }

            </tr>
          ))
        }
      </tfoot>
    </table>
  )
}

export default BasicTable