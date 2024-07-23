import React, { Component } from 'react'
import staticData from '../shared/constant/constantData'

export class ToggleImgComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chg:true
        }
    }

    changeImg = () =>{
        if(this.state.chg == false)
          this.setState({chg:true})
       else 
       this.setState({chg:false})
    }
        
    
    render() {

       if(this.state.chg){
        return (
            <div>
            
                <img src={staticData.model} alt='Ash' id='ash'></img>
                <h4 id="ash">Model</h4>

                <button type='button' onClick={() => this.changeImg()}>changeImage</button>
            </div>
        )
    }else{
        return <div>
        <img src={staticData.model2} alt='Ash' id='bla'></img>
        <h4 id="bla">Jewellery Model</h4>
        <button type='button' onClick={() => this.changeImg()}>changeImage</button>
        </div>
    }
}
}

export default ToggleImgComp;