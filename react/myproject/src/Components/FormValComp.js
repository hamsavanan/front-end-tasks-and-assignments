import React, { useState } from 'react'

const FormValComp = () => {

const[user,setUser] = useState({
    userName:"",
    userPassword:"",
    term:false
})

const inputChangeHandler = (event)=>{
    // console.log(event.target.type);
    // console.log(event.target.name);
    // console.log(event.target.value);

const {type,name,value} = event.target;
setUser({...user,[name]:value})
}

const checkData = (event)=>{
event.preventDefault();
if(user.userName.trim()===""){
    window.alert("User Name is required");
    return false;
}

if(!user.userName.trim().match('^[a-zA-Z ]{3,20}$')){
    window.alert("User Name must contain Min-3 and Max-20");
return false;
}

if(user.userPassword.trim()===""){
    window.alert("User Password is required");
    return false;
}

if(!user.userPassword.trim().match('^[a-zA-Z0-9 ]{4,20}$')){
    window.alert("User Password must contain Min-4 and Max-20");
return false;
}

if(user.term===false){
    window.alert("Please Accept terms and condition");
    return false;
}
window.alert(JSON.stringify(user));
}


    return (
        <div>
            <h2>This is FormVal Component</h2>
            <form onSubmit={checkData}>
                <label><strong>Enter User Name:</strong></label> <br />
                <input type='text' name='userName' onChange={inputChangeHandler} value={user.userName} /> <br /><br />

                <label><strong>Enter User Password:</strong></label>  <br />
                <input type='text' name='userPassword' onChange={inputChangeHandler} value={user.userPassword} /> <br />

                <label>
                <input type='checkbox' name='term' onChange={inputChangeHandler} value={user.term} />
                Terms and Condition</label> <br />

<button type='submit' className='btn btn-primary mt-2'>Submit</button>

            </form>
        </div>
    )
}

export default FormValComp
