import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {productRows} from '../../../dummyData'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function ProductList() {

    const [data, setData] = useState(productRows);
    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id != id)); 
    }

    const columns = [
        { field: 'id', headerName: 'Id', width: 120 },
        {
          field: 'product',
          headerName: 'Product',
          width: 150,
          renderCell: (params)=>{
            return (
                <div className="productListprod">
                    <img src={params.row.img} alt="" className="productListImg"/>
                    {params.row.productName}
                </div>
                
            )
          },
          editable: true,
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 200,
          editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 200,
            editable: true,
          },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return (
                    <>
                    <Link to={"/product/" + params.row.id}>
                    <button className="productlistEdit">Edit</button>
                    </Link>
                    
                    <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.rows.id)}/>
                    </>
                )
            }
        }
      ];


    return (
        
        <div className="productList">
             <DataGrid
        rows={productRows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      /> 
        </div>
    )
}
