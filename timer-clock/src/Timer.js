import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      flag: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  tick() {
    this.setState({
      time: this.state.time += 1
    });
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  pauseTimer() {
    clearInterval(this.timerID);
  }

  resetTimer() {
    this.setState({ time: 0 });
  }

  isPaused() {
    if (this.state.time === 0) {
      return <button onClick={this.startTimer}>Start</button>
    }
    return <button onClick={this.pauseTimer}>Pause</button>
  }

  render() {
    return (
      <div className="timer">
        {this.isPaused()}<p className="timer__counter">{Math.floor(this.state.time / 60) + ': ' + this.state.time % 60}</p><button onClick={this.resetTimer}>Reset</button>
      </div>

    );
  }
}

export default Timer
