import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);

  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleUsernameChange}/>
        <input type="password" value={this.state.value} onChange={this.handlePassword} />
        <button type="submit" value="Submit">Sign Up</button>
      </form>
    );
  }
}

const element = <RegistrationForm />;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
