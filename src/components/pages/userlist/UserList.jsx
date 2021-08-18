import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {userRows} from '../../../dummyData'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function UserList() {
    const [data, setData] = useState(userRows)
    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id != id)); 
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
          field: 'user',
          headerName: 'User',
          width: 150,
          renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img src={params.row.avatar} alt="" className="userListImg"/>
                    {params.row.userName}
                </div>
                
            )
          },
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
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
            field: 'transaction',
            headerName: 'Transaction',
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
                    <Link to={"/user/" + params.row.id}>
                    <button className="userlistEdit">Edit</button>
                    </Link>
                    
                    <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];
      
      
      



    return (
        <div className="userList">
            <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      /> 
        </div>
    )
}
