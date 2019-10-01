import React, {  Component} from 'react';
import ReviewModal from './reviewModal.jsx'
import MapComponent from './mapComponent.jsx';
import MarkerModal from './markerModal.jsx'
class UserPage extends Component {
  constructor(props) {
    super(props)
    console.log("#################&&&&^&^&^", props)
    this.state = {
      modalIsOpen: false,
      reviews : this.props.reviews
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
   _reviews = (reviews) => {
     this.setState({
       reviews: reviews
     })
     console.log(this.state.reviews)
   } 
render() {
  
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={this._createReview}>Create</button>
     <MapComponent className="map" reviews={this.state.reviews}/>
      <ReviewModal modalIsOpen={this.state.modalIsOpen} modalIsClosed={this._closeModal}
       confirmReview={this._confirmReview} user={this.props.user} setReviews={this._reviews}/>
    </div>
  )
}
}

export default UserPage;