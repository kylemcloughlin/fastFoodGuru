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
  // _writeReview = (e) => {
  //   console.log('hit')
  // }
_sendName = (obj) => {
  console.log("#######################")
  console.log(obj)
  console.log()
  this.setState({
    user: obj
  })
}

_logout = () => {
  console.log(`${this.state.user}`)
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
         <h1 id="header-title">Fast Food Guru</h1>
    {
      !this.state.loggedIn ? ( < button id = "header-reg"
        className = "button"
        onClick = {
          this._register
        } > <b id="button-text">
             register 
          </b>
             </button>) : (<button id="header-reg" className="button" onClick={this._logout}>Log Out</button > )

    } 
      </div>
      </header>





        <body className="App-body">

          { this.state.loggedIn ?
           (<UserPage sendToBack={this._sendReview} user={this.state.user} reviews={this.state.reviews}/>) : ( <Login user={this.user} sendToBack={this._sendName}/> ) }
        
           <RegisterModal modalIsOpen={this.state.modalIsOpen} modalIsClosed={this.closeModal} register={this.user}/>
           </body>
      
    
  

  
    </div>
  );
}
}

export default App;
