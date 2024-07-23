import React, { Component } from "react";



class SetStateComp extends Component{

constructor(){
    super()

this.state = {
    count:0,
    name:"Haran"
}

}

changeName = ()=>{
    this.setState((prevState)=>({name:"Haran Aadhithya"}))

}


counterInc = ()=>{
    // this.setState({count:this.state.count+1});
    this.setState((prevState)=>({count:prevState.count+1}))
}

counterDec = ()=>{
    // this.setState({count:this.state.count-1});
    this.setState((prevState)=>({count:prevState.count-1}))
}

render(){

  return (
   <div>
  <h2>This is hamsa</h2>
  <h2>This Count Value is {this.state.count}</h2>
  <h2>My Name is {this.state.name}</h2>
  <button type="button" onClick={()=>this.counterInc()}>Count++</button> &nbsp;
  <button type="button" onClick={()=>this.counterDec()}>Count--</button> &nbsp;
  <button type="button" onClick={()=>this.changeName()}>Change Name</button>
  </div>
  )
}
}

export default SetStateComp;