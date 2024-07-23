import React, { Component } from "react";


class ConditionRenComp extends Component{

    constructor(){
        super();
    
    this.state = {
        iscond:true
    }
    }

    render(){
        let msg ="";
        if(this.state.iscond){
            // return <h2>Admin Logged in Successfully</h2>
            msg = "Admin Logged in Successfully";
        }else{
        // return <h2>Hi this is ConditionRenComp</h2>
        msg = "User Logged in Successfully";

        }
        // element as variable
        // return <h2>{msg}</h2>


// 3.use of ternary operator
// return this.state.iscond ? <h2>Admin Logged in Successfully</h2> : <h2>User Logged in Successfully</h2>


// 4.short-circuit
return this.state.iscond && <h2>Admin Logged in Successfully</h2>

    }

}

export default ConditionRenComp;