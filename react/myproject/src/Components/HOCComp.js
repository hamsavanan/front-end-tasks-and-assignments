import React, { Component } from 'react'

const HOCComp = (WrapperComp) => {

class HOC extends Component{

constructor(props) {
    super(props)

    this.state = {
         count:0
    }
}

counterInc = () =>{
    this.setState((prevState)=>({count:prevState.count+1}))
}




render(){
    return <WrapperComp count={this.state.count} counterInc={this.counterInc} ></WrapperComp>
}
}
    return HOC
}



export default HOCComp;
