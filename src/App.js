import React, { Component } from 'react';
import crowAudioFile from './resources/crow.wav';
//Crow1 from neufv of freesounds.org under Creative Commons 0 License"
import Grid from './framework/Grid';
import './style/App.css';


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
                name: "crow",
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
          <Grid maxX={this.state.maxX} maxY={this.state.maxY} spriteVals={this.state.spriteVals}/>
      </div>
    );
  }
}

export default App;
