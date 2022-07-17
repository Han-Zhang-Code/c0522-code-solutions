import React from 'react';
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState();
  }

  render() {
    return (
      <div><img src={this.props.images[0]} alt="" /></div>
    );
  }
}
export default Carousel;
