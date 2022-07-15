import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let background = '';
    let iconClass = 'fa-solid fa-bars font-size';
    let menuContainer = 'menu-container hidden';
    if (this.state.isOpen) {
      background = 'background';
      iconClass = 'hidden';
      menuContainer = 'menu-container';
    }
    return (
      <div onClick={this.handleClick} className={background}>
        <div>
          <i onClick={this.handleClick} className={iconClass}></i>
        </div>
        <div className={menuContainer}>
          <ul className='row'>
            <li className='list-head'>menu</li>
            <li>about us</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
