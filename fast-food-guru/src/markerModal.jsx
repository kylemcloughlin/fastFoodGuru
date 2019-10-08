import React from 'react';
/* global google */
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: "58%",
    height: "50%",
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2f2e2e',
    color: 'white'
  }
};

class MarkerModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      address: null
    };

    
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    // this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {

    this.props.modalIsClosed()

  }
  componentWillMount() {
    Modal.setAppElement('body')
    
  }

 
  render() {
     let average = this.props.review.cs + this.props.review.speed + this.props.review.quality + this.props.review.freshness + this.props.review.cleanliness 
    return (
      <div>

        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="close" onClick={this.closeModal}>close</button>
          <h1 classNam="title" ref={subtitle => this.subtitle = subtitle}>{this.props.review.restaurant}</h1>
        <div>  
            <label>Cleanliness: </label>
            <span>{this.props.review.cleanliness} </span>
            <label>Freshness: </label>
            <span>{this.props.review.freshness} </span>
            <label>Quality: </label>
            <span>{this.props.review.quality} </span>
            <label>Speed: </label>
            <span>{this.props.review.speed} </span>
            <label>Customer Service: </label>
            <span>{this.props.review.cs} </span>
            <label>average: </label>
            <span>{this.props.review.average}</span>
            {/* <p>{this.state.address}</p> */}
          <p>{this.props.review.review}</p>
        </div>
          
        </Modal>
      </div>
    );
  }
}

export default MarkerModal;