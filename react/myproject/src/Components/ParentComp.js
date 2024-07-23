import React, { Component, Fragment } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {

constructor(props) {
    super(props)

    this.state = {
         empName:"Haran",
         empSalary:95000
    }
}

changeData = ()=>{
    // this.setState({count:this.state.count+1});
    this.setState((prevState)=>({empSalary:prevState.empSalary+1000,empName:"Haran Aadhithya"}))
}

    render() {
        return (
            <Fragment>
                <h2>This is Parents Component</h2>
                <p>Employee Name is <strong>{this.state.empName}</strong> Salary is <strong>{this.state.empSalary}</strong></p>
                <button type="button" onClick={()=>this.changeData()}>Change the employee data</button>
                <hr />
                <ChildComp empName={this.state.empName} empSalary={this.state.empSalary} changeData={(this.changeData)}></ChildComp>
            </Fragment>
        )
    }
}

export default ParentComp;
