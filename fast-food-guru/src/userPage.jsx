import React, {  Component} from 'react';
import ReviewModal from './reviewModal.jsx'
class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }
    _createReview = () => {
      this.setState({
        modalIsOpen: true
      })

      console.log(this.state.modalIsOpen)
    }
      
    _closeModal = () => {
      console.log('clsoe modal')
       this.setState({
            modalIsOpen: false
        })
   }
render() {
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={this._createReview}>Create</button>
      <ReviewModal modalIsOpen={this.state.modalIsOpen} modalIsClosed={this._closeModal}/>
    </div>
  )
}
}

export default UserPage;