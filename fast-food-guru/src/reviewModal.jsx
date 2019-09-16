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
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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
      review: null
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
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
    let output = {
      address: this.state.address,
      restaurant: this.state.restaurant,
      review: this.state.review,
      user: this.props.user
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
        console.log(json)
      })
      .catch(err => console.log(err))
    console.log(output)
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

          <h2 ref={subtitle => this.subtitle = subtitle}>Write Review</h2>
          <button onClick={this.closeModal}>close</button>
          <form>
         
            <input name="restaurant" placeholder="restaurant" onChange={this._handleRestaurant}/>
            <input name="" placeholder="Address" onChange={this._handleAddress}/>
            <textarea placeholder="Review" onChange={this._handleText}></textarea>
            <a onClick={this._handleSubmit}>Submit</a>
          </form>
        </Modal>
      </div>
    );
  }
}



export default ReviewModal;