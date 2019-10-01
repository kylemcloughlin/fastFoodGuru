import React, {
  Component
} from 'react';
import Login from './login.jsx';
import './App.css';
import UserPage from './userPage.jsx'
import RegisterModal from './registerModal.jsx'
class App extends Component {
  constructor(props) {;
    super(props)
    this.state = {
      loggedIn: false,
      user: null,
      reviews: null
    };

  }
   _register = () => {
     console.log('hit')
     this.setState({
       modalIsOpen: true
     });
   }
   closeModal = () => {
     this.setState({
       modalIsOpen: false
     });
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
      <div className="header-css-help">
         <h1 id="header-title"> <a className="first-letter">F</a>ast <a className="first-letter">F</a>ood <a className="first-letter">G</a>uru</h1>
        <button id="header-reg" className="button" onClick={this._register}>register</button>
      </div>
      </header>
        <body className="App-body">

          { this.state.loggedIn ?
           (<UserPage sendToBack={this._sendReview} user={this.state.user} reviews={this.state.reviews}/>) : ( <Login user={this.user} sendToBack={this._sendName}/> ) }
        
           <RegisterModal modalIsOpen={this.state.modalIsOpen} modalIsClosed={this.closeModal} register={this.user}/>
           </body>
      
    
  
        <footer className="App-footer"/>
  
    </div>
  );
}
}

export default App;
