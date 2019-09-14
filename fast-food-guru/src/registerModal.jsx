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

    this.state = {
      userName: null,
      region: null,
      email: null,
      password: null,
      confirmed: null
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
  componentWillMount() {
    Modal.setAppElement('body')
  }

  _addUserName = (e) => {
    console.log(e.target.value)
    this.setState({
      userName: e.target.value
    })
  }
  _addRegion = (e) => {
    console.log(e.target.value)
    this.setState({
      region: e.target.value
    })
  }

  _addPassword = (e) => {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  _confirmPassword = (e) => {
    console.log(e.target.value)
    this.setState({
       confirmed: e.target.value 
    })
  }
  _handleSubmit = (e) => {
    let output = {
      user: this.state.userName,
      region: this.state.region,
      password: this.state.password,
      confirmed: this.state.confirmed

    }
    window.fetch('/user/new', {
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
    this.props.register(output)
    this.props.modalIsClosed()
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
            <input placeholder="User Name" onChange={this._addUserName}/>
            <input placeholder="Region" onChange={this._addRegion}/>
            <input placeholder="Email" onChange={this._addEmail}/>
            <input type="password" placeholder="Password" onChange={this._addPassword}/>
            <input type="password" placeholder="confirm Password"onChange={this._confirmPassword}/>
            <a onClick={this._handleSubmit}>submit</a>

          </form>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;