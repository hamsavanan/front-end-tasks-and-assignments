import React, { Component } from 'react'
import HOCComp from './HOCComp';
import {Button, ButtonBase} from '@mui/material'

class ClickCounterComp extends Component {


// constructor(props) {
//     super(props)

//     this.state = {
//          count:0
//     }
// }

// counterInc = ()=>{
//     // this.setState({count:this.state.count+1});
//     this.setState((prevState)=>({count:prevState.count+1}))
// }

    render() {
        return (
            <div>
                {/* <h2>This ClickCounter Component Output</h2> */}
  {/* <h2>This Count Value is {this.state.count}</h2>
  <button type="button" onClick={()=>this.counterInc()}>Count++</button> &nbsp; */}
  <h2>This Count Value is {this.props.count}</h2>
  <Button variant='contained' onClick={()=>this.props.counterInc()}>Count++</Button> &nbsp;
            </div>
        )
    }
}

export default HOCComp(ClickCounterComp) 
