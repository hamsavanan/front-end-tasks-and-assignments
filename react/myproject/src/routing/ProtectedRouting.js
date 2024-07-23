import React, { Component,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRouting = ({Component}) => {

const nav = useNavigate();
useEffect(()=>{
    if(!sessionStorage.getItem("user")){
        nav("/");
    }
},)

    return (
        <div>
            {/* <h2>This is protected routing component</h2> */}
            <Component></Component>
        </div>
    )
}

export default ProtectedRouting

