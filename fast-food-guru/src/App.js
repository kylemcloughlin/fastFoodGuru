import React, {
  Component
} from 'react';
import Login from './login.jsx';
import './App.css';

class App extends Component {
  constructor(props) {;
    super(props)
    this.state = {
      loggedIn: false,
    };

  }
  user = (message) => {
    console.log("app", message);
    
  } 
  password = () => {

  }
render() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Fast Food Guru</h1>
        <p>
          <Login user={this.user}/>
        </p>
       
      </header>
    </div>
  );
}
}

export default App;
