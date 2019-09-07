import React, { Component } from 'react';
import Modal from 'react-modal';
import RegisterModal from './registerModal.jsx'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      modalIsOpen: false
    }
  }
  _handleUserName = (event) => {
    if (event.keyCode == 13 && event.target.value) {
        console.log('hit')
        this.setState({
          user: event.target.value
        })
        // console.log(this)
      console.log(`${this.state.user}`)
    
    }
  }
  _handlePassword = (event) => {
    if (event.keyCode == 13 && event.target.value) {
      let output = {pw: event.target.value,
      user: this.state.user}
      console.log('hit')
      this.props.user(output)
      console.log()
      
    }
  }
  _register = () => {
   console.log('hit')
    this.setState({ modalIsOpen: true });
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  componentDidMount() {
    console.log('component did mount');
    
  }
  render() {
    console.log('login render')
    return (
      <body>
       <form>
       <h2>User Name:</h2>
          <input className="user" onKeyDown={this._handleUserName} >
        </input>
          <h2>Password:</h2>          
          <input type="password" name="pw"className="password" onKeyDown={this._handlePassword}>
          </input>
       </form>
        <button onClick={this._register}>register</button>
        <RegisterModal modalIsOpen={this.state.modalIsOpen} modalIsClosed={this.closeModal}/>
      </body>
    )
    
  }
}
// isOpen={this.state.modalIsOpen}
// onAfterOpen={this.afterOpenModal}
// onRequestClose={this.closeModal}

export default Login;