import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyDSZy_muaB5hzAf8NYwyuM3JCj0AT2tH4s");
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: "58%",
    height: "50%",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2f2e2e',
  color: 'white'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    console.log("$$$$$$$$$$$$", props)
    this.state = {
      restaurant: null,
      address: null,
      review: null,
      CS: 10,
      cleanliness: 10,
      freshness: 10,
      quality: 10,
      speed: 10
    };

    // this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // openModal() {
  //   // this.setState({ modalIsOpen: true });
  // }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    // this.setState({ modalIsOpen: false });
    this.props.modalIsClosed()

  }
  _handleAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }
  _handleRestaurant = (e) => {
    this.setState({
      restaurant: e.target.value
    })
  }

  _handleText = (e) => {
    this.setState({
      review: e.target.value
    })
  }




  _handleSubmit = (e) => {
    Geocode.fromAddress(`${this.state.address}, Toronto, ON, Canada`).then(
      response => {
          console.log("hit geocode")
         this.setState({
          lat: response.results[0].geometry.location.lat,
           lng: response.results[0].geometry.location.lng
 
         })

         this.handleFetch();
      
      },
      error => {
        console.error(error);
      }
    );
  }


   handleFetch = () => {
     let average = parseInt(this.state.CS) + parseInt(this.state.cleanliness) 
     + parseInt(this.state.freshness) + parseInt(this.state.quality) + parseInt(this.state.speed)
     console.log(average) 
     average = average / 5
     console.log("hit", average) 

    let output = {
      lat: this.state.lat,
      lng: this.state.lng,
      restaurant: this.state.restaurant,
      review: this.state.review,
      user: this.props.user,
      CS: this.state.CS,
      cleanliness: this.state.cleanliness,
      freshness: this.state.freshness,
      quality: this.state.quality,
      speed: this.state.speed,
      average: average

    }
    window.fetch('review/create', {
      method: 'POST',
      body: JSON.stringify(
        output
      ),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(resp => resp.json())
      .then((json) => {

        this.props.setReviews(json)
      })
      .catch(err => console.log(err))

    this.props.confirmReview(output)
    this.props.modalIsClosed();
  }


  componentWillMount() {
    Modal.setAppElement('body')
  }
  render() {
    return (
      <div>

        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-head-wrap">
          <h2 className="modal-title" ref={subtitle => this.subtitle = subtitle}>Write Review</h2>
          <button className="close" onClick={this.closeModal}>close</button>
          </div>
         
          <form className="modal-form">
         
            <input className="reg-input" name="restaurant" placeholder="restaurant" onChange={this._handleRestaurant}/>
            <input className="reg-input" name="" placeholder="Address" onChange={this._handleAddress}/>
           <div className="ranger">
              <label>Customer Service: {this.state.CS}</label>
              <input className="reg-range" name="Customer Service" type="range" min="0" max="10" onChange={(e) => { this.setState({ CS: e.target.value }) }}/>
            </div>              
              <div className="ranger">
            <label>Cleanliness: {this.state.cleanliness}</label>            
            <input className="reg-range" name="Cleanliness" type="range" min="0" max="10" onChange={(e) => { this.setState({cleanliness: e.target.value})}}/>
            </div>
            <div className="ranger">
            <label>Quality: {this.state.quality}</label>            
              <input className="reg-range" name="Quality" type="range" min="0" max="10" onChange={(e) => { this.setState({ quality: e.target.value }) }}/>
            </div>
            <div className="ranger">
            <label>Freshness: {this.state.freshness}</label>            
              <input className="reg-range" name="Freshness" type="range" min="0" max="10" onChange={(e) => { this.setState({ freshness: e.target.value }) }}/>
            </div>
            <div className="ranger">
            <label>Speed: {this.state.speed}</label>           
              <input className="reg-range" name="Speed" type="range" min="0" max="10" onChange={(e) => { this.setState({ speed: e.target.value }) }}/>
           </div>
            <textarea className="review-body" placeholder="Review" onChange={this._handleText}></textarea>
            <button id="rev-submit" className="button" onClick={this._handleSubmit}>Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}



export default ReviewModal;