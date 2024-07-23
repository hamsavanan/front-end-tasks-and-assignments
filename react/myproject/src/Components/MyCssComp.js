import React from 'react'
import staticData from '../shared/constant/constantData'
import './external.css'
import mymodulecss from './mymodulecss.module.css'

const MyCssComp = () => {

const txtObj ={
    color:!true?"green":"white",
    fontSize:!false?"20px":"40px",
    backgroundColor:!true?"pink":"firebrick"
}

    return (
        <div>
            <h2 style={{color:'firebrick',backgroundColor:'aqua'}}>This is My Css Component</h2>
            <p style={txtObj}>Gol D Roger is a pirate king, He is the most powerful one in op universe</p>

            <img className='myImg' src={staticData.model} alt="jewellery model" /> <br />

            <img className={mymodulecss.lol} src={staticData.model2} alt="jewellery model" /> <br />


        </div>
    )
}

export default MyCssComp;
