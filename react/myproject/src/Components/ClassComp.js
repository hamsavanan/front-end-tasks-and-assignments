import React, { Component } from "react";
class ClassComp extends Component{

constructor(){
    super();
    this.state = {
        company:"Changepond",
        salary:95000
    }
}

    render(){

const {company,salary} = this.state;
const {myName,post} = this.props;

        return <div>
        <h2>This is class Component</h2>
{/* accessing props data */}
        {/* <p>My Name is {this.props.myName} , I am {this.props.post}</p> */}
        <p>My Name is {myName} , I am {post}</p>
{/* accessing state data */}
        {/* <p>Company Name is {this.state.company} , Salary is {this.state.salary}</p> */}
        <p>Company Name is {company} , Salary is {salary}</p>
        </div>
    }

}
export default ClassComp;