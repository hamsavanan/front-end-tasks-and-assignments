import React, { UseState, useState } from 'react'
import { Button } from '@mui/material'

const UseStateHookComp = () => {

const [count,setCount] = useState(0);
const [name,setName] = useState("Haran");

const counterInc =()=>{
    setCount(count+1);
}

    return (
        <div>
             <h2>This is Use State Hooks Component</h2>
             <p>Count Value is: {count}</p>
             <Button variant='contained' onClick={()=>counterInc()}>Counter ++</Button>{" "}
             <Button variant='contained' onClick={()=>setCount(count+1)}>Counter ++</Button>{" "}
             <p>My Name is: {name}</p>
             <Button variant='contained' onClick={()=>setName("Haran Aadhithya")}>Chnage Name</Button>{" "}
        </div>
    )
}

export default UseStateHookComp
