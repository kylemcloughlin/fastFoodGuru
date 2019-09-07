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


render() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Fast Food Guru</h1>
        <p>
          { this.state.loggedIn ?
           (<UserPage/>) : ( <Login user={this.user}/> ) }
        </p>
      
    

      </header>
    </div>
  );
}
}

export default App;
