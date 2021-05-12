import { ReactComponent } from "*.svg";
import { Component } from "react";

class Music extends ReactComponent {
    constructor(grabaciom) {
    this.state = {

      play: false,
      pause: true

    };

    this.url = grabacion;
    this.audio = new Audio(this.url);

  }

  play(){
    this.setState({
      play: true,
      pause: false
    });
    console.log(this.audio);
    this.audio.play();
  }
  
  pause(){
  this.setState({ play: false, pause: true });
    this.audio.pause();
  }
}
export default Music;