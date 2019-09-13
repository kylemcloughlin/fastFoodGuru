import React, {
  Component
} from 'react';
import Login from './login.jsx';
import './App.css';
import MapComponent from './mapComponent.jsx';
import UserPage from './userPage.jsx'
class App extends Component {
  constructor(props) {;
    super(props)
    this.state = {
      loggedIn: false,
    };

  }
  user = (message) => {
    console.log("app", message);
    this.setState({
      loggedIn: true
    })
  } 
  _writeReview = (e) => {
  
    console.log('hit')
  }
_sendReg = (obj) => {
  console.log("app", obj);
}
_sendReview = (obj) => {
  console.log("app", obj);
}
 fetchData = () => {
   fetch('/reviews/index')
     .then(response => {
       if (response.ok) {
         response.json().then(data => {
           console.log(data)
         })

       }
     })
     .catch(err => console.log('parsing failed', err))

 }
 componentDidUpdate() {
  console.log("hit cdm") 
  if (this.state.loggedIn === true) {
  console.log("hit if")
     
    this.fetchData();
   }
 }
render() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Fast Food Guru</h1>
        <p>
          { this.state.loggedIn ?
           (<UserPage sendToBack={this._sendReview}/>) : ( <Login user={this.user} sendToBack={this._sendReg}/> ) }
        </p>
      
    

      </header>
    </div>
  );
}
}

export default App;
