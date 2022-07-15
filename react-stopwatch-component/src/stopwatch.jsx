import React from 'react';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTicking: false, timeCounter: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  timer() {
    this.intervalID = setInterval(() => {
      this.setState({ timeCounter: this.state.timeCounter + 1 });
    }, 1000);

  }

  handleClick() {
    this.setState({ isTicking: !this.state.isTicking });
    if (this.state.isTicking) {
      clearInterval(this.intervalID);
    } else {
      this.timer();
    }
  }

  resetTimer() {
    if (!this.state.isTicking) {
      this.setState({ timeCounter: 0 });
    }
  }

  render() {
    let playOrPause;
    if (this.state.isTicking) {
      playOrPause = 'fa-solid fa-pause';
    } else {
      playOrPause = 'fa-solid fa-play';
    }
    return (
      <div className='row' >
        <div onClick={this.resetTimer} className='clock row'>{this.state.timeCounter}</div>
        <i onClick={this.handleClick} className={playOrPause}></i>
      </div>
    );
  }
}
export default Stopwatch;
