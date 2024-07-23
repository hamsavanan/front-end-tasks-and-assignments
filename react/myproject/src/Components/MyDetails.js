import React, { Component } from "react";
class MyDetails extends Component{

constructor(){
    super();
    this.state = {
        gender:"Male",
        maritalstatus:"single",
        address:"Chennai"
    }
}

    render(){

const {gender,maritalstatus,address} = this.state;
const {fname,lname,email,contact} = this.props;

        return <div>
        <h2>This is class Component</h2>
{/* accessing props data */}
        {/* <p>My Name is {this.props.myName} , I am {this.props.post}</p> */}
        <p>My Name is {fname} {lname} My email is {email} My contact is {contact}</p>
{/* accessing state data */}
        {/* <p>Company Name is {this.state.company} , Salary is {this.state.salary}</p> */}
        <p>My Na Gennder is {gender} , marital status is {maritalstatus} , My address is {address}</p>
        </div>
    }

}
export default MyDetails;