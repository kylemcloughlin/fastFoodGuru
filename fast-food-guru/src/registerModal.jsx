import React from 'react';
import ReactDOM from 'react-dom';
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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


class RegisterModal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   modalIsOpen: this.props.open
    // };

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
  componentWillMount() {
    Modal.setAppElement('body')
  }

  _addUserName = () => {

  }
  _addRegion = () => {

  }

  _addPassword = () => {
    
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

          <h2 ref={subtitle => this.subtitle = subtitle}>Register</h2>
          <button onClick={this.closeModal}>close</button>
          
          <form>
            <input placeholder="userName" onChange={this._addUserName}/>
            <input placeholder="region" />
            <input placeholder="email"/>
            <button>submit</button>

          </form>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;