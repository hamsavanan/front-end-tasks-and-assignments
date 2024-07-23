import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
              <h2>This is Child Component</h2>
              <p>name is {props.empName} Salary is {props.empSalary}</p>
              <button type="button" onClick={props.changeData}>Change Data</button>
        </div>
    )
}

export default ChildComp;
