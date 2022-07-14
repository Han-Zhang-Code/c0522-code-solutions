import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { numberOfClicks: 0 };
  }

  handleClick() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    let className = 'purple';
    if (this.state.numberOfClicks <= 3 && this.state.numberOfClicks >= 0) {
      className = 'purple';
    } else if (this.state.numberOfClicks <= 6 && this.state.numberOfClicks >= 3) {
      className = 'lightpurple';
    } else if (this.state.numberOfClicks <= 9 && this.state.numberOfClicks >= 6) {
      className = 'red';
    } else if (this.state.numberOfClicks <= 12 && this.state.numberOfClicks >= 9) {
      className = 'orange';
    } else if (this.state.numberOfClicks <= 15 && this.state.numberOfClicks >= 12) {
      className = 'yellow';
    } else if (this.state.numberOfClicks >= 18) {
      className = 'white';
    }
    return (

      <div>
        <button onClick={this.handleClick} className={className}>Hot Button</button>
        <label>{this.state.numberOfClicks} Clicks</label>
      </div>

    );
  }
}

export default HotButton;
