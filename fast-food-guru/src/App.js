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
      user: null,
      reviews: null
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
_sendName = (obj) => {
  console.log("#######################")
  console.log(obj)
  console.log()

  this.setState({
    user: obj
  })
}
_sendReview = (obj) => {
  console.log("app", obj);
}
 fetchData = () => {
   fetch('/reviews/index')
     .then(response => {
       if (response.ok) {
         response.json().then(data => {
           this.setState({
             reviews: data
           })
         })

       }
     })
     .catch(err => console.log('parsing failed', err))

 }
 componentDidMount() {

    this.fetchData();
  
 }
render() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Fast Food Guru</h1>
        <p>
          { this.state.loggedIn ?
           (<UserPage sendToBack={this._sendReview} user={this.state.user} reviews={this.state.reviews}/>) : ( <Login user={this.user} sendToBack={this._sendName}/> ) }
        </p>
      
    

      </header>
    </div>
  );
}
}

export default App;
