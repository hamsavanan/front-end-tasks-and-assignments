import React, { Component } from 'react'

 class VirtualDomComp extends Component {

constructor(props) {
    super(props)

    this.state = {
         breakFast:[{id:1,name:"Dosa"},{id:2,name:"Idli"},{id:3,name:"Poori"},{id:4,name:"Pongal"},{id:5,name:"Lol"},{id:6,name:"Karidosa"}]
    }
}



    render() {
        return (
            <div>
                <h2>This is breakfast comp</h2>
                <ul>
                    {this.state.breakFast.map((val,index)=>{
                     return   <li key={index}>{val.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default VirtualDomComp
