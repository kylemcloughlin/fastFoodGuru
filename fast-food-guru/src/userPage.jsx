import React, {  Component} from 'react';
import ReviewModal from './reviewModal.jsx'
import MapComponent from './mapComponent.jsx';
import TopFive from './topFive.jsx';
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
    <div className="user-page">
      <button onClick={this._createReview} id="create-review" className="button">Write New Review</button>
     <MapComponent className="map" reviews={this.state.reviews}/>
      <ReviewModal modalIsOpen={this.state.modalIsOpen} modalIsClosed={this._closeModal}
       confirmReview={this._confirmReview} user={this.props.user} setReviews={this._reviews}/>
      <TopFive reviews={this.state.reviews} />
    </div>
  )
}
}

export default UserPage;