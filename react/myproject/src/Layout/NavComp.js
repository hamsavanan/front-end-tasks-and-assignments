import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const NavComp = () => {

    const nav = useNavigate();

    function logout(){
        nav("/login"); 
    }

    return (
        <div>
             <h2>This is Nav Component</h2> 
           <Link to="myslider" className='btn btn-outline-success btn-sm'>MySlider</Link>{" "}
           <Link to="myimage" className='btn btn-outline-success btn-sm'>MyImage</Link>{" "}
           <Link to="parent" className='btn btn-outline-success btn-sm'>ParentComp</Link>{" "}
           <Link to="reacthook" className='btn btn-outline-success btn-sm'>ReactHookComp</Link>{" "}
           <Link to="virtualdom" className='btn btn-outline-success btn-sm'>Virtual Dom</Link>{" "}
           <Link to="proddash" className='btn btn-outline-warning btn-sm'>Product Dashboard</Link>{" "}
           <button onClick={()=>logout()}> Signout</button>
        </div>
    )
}


export default NavComp