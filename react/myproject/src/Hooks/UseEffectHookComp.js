import React, {useState, useEffect} from 'react'
import { Button } from '@mui/material';

const UseEffectHookComp = () => {

    const [count,setCount] = useState(0);
    const[salary,setSalary] = useState(500000)

    // case 1 : when no dependency value pass
    // useEffect(() => {
    //  //   window.alert("hi :",setCount(count+1))
    // })

    // case 2 : when pass dependency value as blank array 
    // useEffect(() => {
    //     setCount(count+1)
    // },[])

    //   case 3 : when we want to execute useEffect hook as our choice.
    useEffect(() => {
        setCount(count+1)
        // setSalary(salary+0.1)
    },[salary])

    return (
        <div>
            <h4>This is UseEffectHookComp Hooks</h4>
            <p>Count value is : <strong>{count}</strong>  </p>
            <p>Salary is : <strong>{salary}</strong>  </p>

            <Button onClick={() => setSalary(salary+100000)} variant='outlined'>Increment Salary </Button>
        </div>
    )
}
export default UseEffectHookComp
