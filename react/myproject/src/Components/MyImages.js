import React, { Component } from 'react'
import lol from '../shared/images/carousal1.jpg';
import lol1 from '../shared/images/carousal2.jpg';

import staticData from '../shared/constant/constantData';

class MyImages extends Component {

constructor(props) {
    super(props)

    this.state = {
         
    }
}

    render() {
        return (
            <div>
                <h2>These are my images</h2>
                <img src={lol} alt='Lol' height="200px" width="200px" /> {" "}
                <img src={lol1} alt='Lol1' height="200px" width="200px" />
                <hr />
                <img src={staticData.model} alt='Lol1' height="200px" width="200px" />

            </div>
        )
    }
}

export default MyImages
