import React from 'react';
import {Howl} from 'howler';
import uuidv4 from 'uuidv4';
import cropBareSound from '../resources/walkingOnDirt.wav'
const growthStage = {
    BARE: "bare", 
    GROW: "grow",
    DONE: "done",
}

class GridCropSprite extends React.Component {
    
    

    constructor(props) {
        super(props);
        
        this.state = {
            playerPositionCallback: props.playerPositionCallback,
            x: props.pos.x,
            y: props.pos.y,
            cropState: growthStage.bare,
            audio: new Howl({
                src: [cropBareSound], // 
                loop: false,
            }),
            name: props.name,
            uuid: uuidv4(),
        }
    }

    getUUID = () => {
        return this.state.uuid;
    };

    setX = (x) => {
        this.setState({
            x: x
        }, this.updateAudioPos())
    };

    setY = (y) => {
        this.setState({
            y: y
        }, this.updateAudioPos())
    };

    getGridSpritePosition = () => {
        return {
            x : this.state.x,
            y : this.state.y,
        }
    };

    getSpriteX = () => {
        return this.state.x;
    };

    getSpriteY = () => {
        return this.state.y;
    };

    getName = () => {
        return this.state.name;
    };

    updateAudioPos = () => {
        let playerPosition = this.state.playerPositionCallback();
        this.state.audio.pos(this.state.x - playerPosition.x, this.state.y - playerPosition.y, 1);
    };

    playAudio = () => {
        this.updateAudioPos();
        this.state.audio.play();
    };

    getCropState = () => {
        return this.state.cropState;
    }

    updateCropState = () => {
        switch (this.state.cropState) {
            case growthStage.BARE:
            // Start asynch growing timer, update growthStage
                break;
            case growthStage.GROW:
            // Do nothing ---- Need sound for this?
                break;
            case growthStage.DONE:
            // Harvest crop, reset
                break;
            default: 
                break;
        }
    }

    componentWillUnmount(){
        this.state.audio.unload();
    }

    toString(){
        return `${ this.state.name } : (${this.state.x}, ${this.state.y})`;
    }
}

export default GridCropSprite;
