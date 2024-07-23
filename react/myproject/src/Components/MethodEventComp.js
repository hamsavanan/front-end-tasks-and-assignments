import React, { Component } from "react";

class MethodEventComp extends Component{

greeting = ()=>{
    window.alert("Good Evening Omayera Thaachi");
}

welcome = (...std)=>{
    window.alert(`Welcome ${std}`);

}

render(){
return <div>
<h2>This is Method Event Component</h2>
<button type="button" onClick={()=>this.greeting()}>Greeting</button>
<button type="button" onClick={()=>this.welcome("Roger")}>Welcome</button>
<h2 onMouseOver={()=>this.greeting()}>Hover On me to Call the Greeting Method</h2>
</div>

}

}

export default MethodEventComp;