import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ReactHooksComp = () => {


    return (
        <div>
            {/* <h2>This is React Hooks Component</h2> */}
            <div className='card border-primary'>
            <div className='card-header border-primary'>
            <Link to="usestate" className='btn btn-outline-success btn-sm'>Use State</Link>{" "}
            <Link to="useeffect" className='btn btn-outline-success btn-sm'>Use Effect</Link>{" "}
            </div>  
            <div className='card-body border-primary'>
            <Outlet />
            </div>
            </div>
            

        </div>
    )
}

export default ReactHooksComp
