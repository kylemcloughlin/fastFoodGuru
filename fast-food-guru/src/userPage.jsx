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


    }
    _confirmReview = (obj) => {
      console.log('user page', obj)
      this.props.sendToBack(obj);
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
      <ReviewModal modalIsOpen={this.state.modalIsOpen} modalIsClosed={this._closeModal} confirmReview={this._confirmReview}/>
    </div>
  )
}
}

export default UserPage;