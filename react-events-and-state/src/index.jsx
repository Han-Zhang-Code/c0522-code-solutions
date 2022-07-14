import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.flipClick = this.flipClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  flipClick() {
    this.setState({ isClicked: false });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <button onClick={this.flipClick}>Thanks!</button>;
    } else {
      button = <button onClick={this.handleClick}>Click Me!</button>;
    }

    return (
    <div>{button}</div>
    );
  }
}

const element = (
  <div>
    <CustomButton text="Click Me!" />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
