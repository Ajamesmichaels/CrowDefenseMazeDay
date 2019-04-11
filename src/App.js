import React, { Component } from 'react';
import crowAudioFile from './resources/crow.wav';
import './style/App.css';
import Grid from "./framework/Grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        maxX: 5,
        maxY: 1,
        spriteVals: [
            {
                pos: this.getRandomPos(5, 1),
                audioFile: crowAudioFile,
                name: "Crow",
            },
            {
              pos: this.getRandomPos(5, 1),
              audioFile: crowAudioFile,
              name: "Crow",
          },
        ],
        cropVals: [
          {
            pos: {x:0,y:0},
            name:"Crop",
          },
        ],
    }

  }

  getRandomPos = (x, y) => {
    return {
          x: Math.floor(Math.random() * x),
          y: Math.floor(Math.random() * y),
      };
  };

  render() {
    return (
      <div className="body">
          {/*<MazeComponent maxX={this.state.maxX} maxY={this.state.maxY}/>*/}
          <Grid maxX={this.state.maxX} maxY={this.state.maxY} spriteVals={this.state.spriteVals} cropVals={this.state.cropVals}/>
      </div>
    );
  }
}

export default App;
