import React, { Component } from 'react';
import staticData from '../shared/constant/constantData';

export class ToggleImgComp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentImage: staticData.model,
            currentText: 'Model'
        };
    }

    changeImg = (img, text) => {
        this.setState({ currentImage: img, currentText: text });
    }
        
    render() {
        return (
            <div>
                <img src={this.state.currentImage} alt={this.state.currentText} id='image'></img>
                <h4 id="imageText">{this.state.currentText}</h4>

                <button type='button' onClick={() => this.changeImg(staticData.model, 'Model')}>Roger</button>
                <button type='button' onClick={() => this.changeImg(staticData.model2, 'Jewellery Model')}>Rayleigh</button>
                <button type='button' onClick={() => this.changeImg(staticData.luffyImage, 'Luffy')}>Luffy</button>
                <button type='button' onClick={() => this.changeImg(staticData.zoroImage, 'Zoro')}>Zoro</button>
                <button type='button' onClick={() => this.changeImg(staticData.brookImage, 'Brook')}>Brook</button>
                <button type='button' onClick={() => this.changeImg(staticData.frankyImage, 'Franky')}>Franky</button>
            </div>
        );
    }
}

export default ToggleImgComp;
