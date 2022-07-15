import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    let outerDiv = 'outer-off';
    let innerDiv = 'inner-off';
    const isOn = this.state.isOn;
    let labelText = 'OFF';
    if (!isOn) {
      outerDiv = 'outer-off';
      innerDiv = 'inner-off';
      labelText = 'OFF';
    } else {
      outerDiv = 'outer-off on';
      innerDiv = 'inner-off on';
      labelText = 'ON';
    }
    return (
      <div onClick={this.handleClick} className={outerDiv}>
        <div className={innerDiv}></div>
        <label>{labelText}</label>
      </div>
    );
  }
}

export default ToggleSwitch;
