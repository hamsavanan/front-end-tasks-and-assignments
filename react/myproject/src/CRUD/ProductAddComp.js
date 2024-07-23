import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductAddComp = () => {

    const nav = useNavigate()
    const [itemData,setItemData] = useState({
        pname:"",
        price:"",
        company:""
    });

    const inputChangeHandler = (events)=>{
        const {type,name,value} = events.target;
        setItemData({...itemData,[name]:value});
    }

const addRecord = (event)=>{
    event.preventDefault();
    axios.post(`http://localhost:8888/products`,itemData).then(()=>{
        window.alert("Record Added Successfully");
        nav('/maindashboard/proddash');
    }).catch((error)=>{})
}


    return (
        <div>
            <h2>This is product add component</h2>
            <div className='col-sm-3'>
                <div className='col-sm-6'>
                
           

            <form onSubmit={addRecord}> 
                <label className='form-label'>  Enter Product Name : </label>
                <input type='text' name='pname' onChange={inputChangeHandler} value={itemData.pname} className='form-control' />
             
                <label className='form-label'>  Enter Product Price : </label>
                <input type='text' name='price' onChange={inputChangeHandler} value={itemData.price} className='form-control' />
            
                <label className='form-label'>  Enter Product Company : </label>
                <input type='text' name='company' onChange={inputChangeHandler} value={itemData.company} className='form-control' />

                <button type='submit' className='btn btn-primary mt-2'>Add Data</button>

            </form>

            <div className='col-sm-3'>
            </div>
 </div>
            </div>
            </div>
       
    )
}

export default ProductAddComp
