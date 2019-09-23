import React from 'react';
/* global google */
import Modal from 'react-modal';

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
    return (
      <div>

        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <h1>{this.props.review.restaurant}</h1>
        <div>  
            {/* <p>{this.state.address}</p> */}
          <p>{this.props.review.review}</p>
        </div>
          
        </Modal>
      </div>
    );
  }
}

export default MarkerModal;