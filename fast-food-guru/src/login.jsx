import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
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
  
  componentDidMount() {
    console.log('componet did mount');
  
  }
  render() {
    console.log('login render')
    return (
      <div>
       <form>
       <h2>User Name:</h2>
          <input className="user" onKeyDown={this._handleUserName} >
        </input>
          <h2>Password:</h2>          
          <input type="password" name="pw"className="password" onKeyDown={this._handlePassword}>
          </input>
       </form>
      </div>
    )
 
  }
}

export default Login;