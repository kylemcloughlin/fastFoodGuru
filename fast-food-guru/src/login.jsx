import React, { Component } from 'react';
import RegisterModal from './registerModal.jsx'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pw: null,
      modalIsOpen: false
    }
  }
  _handleUserName = (event) => {
        console.log('hit')
        this.setState({
          user: event.target.value
        })
        // console.log(this)
      console.log(`${this.state.user}`)
    
   
  }
  _handlePassword = (event) => {
    this.setState({
      pw: event.target.value
    })
     
      
    
  }
  _register = () => {
   console.log('hit')
    this.setState({ modalIsOpen: true });
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  _confirmRegistration = (obj) => {
    console.log('login', obj)
    this.props.user(obj);
  }
  _login = () => {
    let output = {
      user: this.state.user,
      pw: this.state.pw
    }
    window.fetch('session/create', {
      method: 'POST',
      body: JSON.stringify(
        output
      ),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(resp => resp.json())
        .then((json) => {
         console.log(json)
        })
      .catch(err => console.log(err))
    console.log('hit')
    this.props.user(output)
    console.log()
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
          <input className="user" onChange={this._handleUserName} >
        </input>
          <h2>Password:</h2>          
          <input type="password" name="pw"className="password" onChange={this._handlePassword}>
          </input>
          <a onClick={this._login}>submit</a>
       </form>
        <button onClick={this._register}>register</button>
        <RegisterModal modalIsOpen={this.state.modalIsOpen} modalIsClosed={this.closeModal} register={this._confirmRegistration}/>
      </body>
    )
    
  }
}
// isOpen={this.state.modalIsOpen}
// onAfterOpen={this.afterOpenModal}
// onRequestClose={this.closeModal}

export default Login;