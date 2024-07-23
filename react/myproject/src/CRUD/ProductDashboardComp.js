import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


const ProductDashboardComp = () => {

const [itemData,setItemData] = useState([]);


    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () =>{
        axios.get(`http://localhost:8888/products`).then((res) => {
            // console.log(res.data);
            setItemData(res.data)
        }).catch((error) => {})
    }

const deleteRecord = (id)=>{
    if(window.confirm(`Are you sure want to Delete Record With Id ${id}`)){
        axios.delete(`http://localhost:8888/products${id}`).then(()=>{
            window.alert("Record Deleted Successfully")
            fetchData();
        }).catch((error)=>{})
    }
}

    return (
        <div> <Link to={"/maindashboard/prodadd"} type='button' className='btn btn-outline-primary btn-sm'><AddBoxOutlinedIcon /></Link>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemData.length > 0 && itemData.map((val,index)=>{
                        // itemData.map((val,index) =>{
                            return <tr>
                                <td>{index+1}</td>
                                <td>{val.pname}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td>
             <Link to={`/maindashboard/produpdate/${val.id}`} type='button' className='btn btn-outline-success btn-sm'><EditOutlinedIcon/></Link>
           <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>deleteRecord(val.id)}><DeleteOutlinedIcon/></button>
                                     </td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
            
        </div>
    )
}

export default ProductDashboardComp
