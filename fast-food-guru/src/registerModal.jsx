import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: "58%",
    height: "60%",
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2f2e2e',
    color: 'white'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


class RegisterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      email: null,
      password: null,
      confirmed: null,
      file: null,
      city: null,
      provOrState: null,
      country: null
    };

    
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

 
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
  _addCity = (e) => {
    console.log(e.target.value)
    this.setState({
      city: e.target.value
    })
  }
  _addProvOrState = (e) => {
    this.setState({
      provOrState: e.target.value
    })
  }

  _addCountry = (e) => {
      console.log(e.target.value)
      this.setState({
        country: e.target.value
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
      city: this.state.city,
      provOrState: this.state.provOrState,
      country: this.state.country,
      password: this.state.password,
      confirmed: this.state.confirmed,

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
    console.log("boop", output)
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
          <div className="modal-head-wrap">
            <h2 className="modal-title" ref={subtitle => this.subtitle = subtitle}>Register</h2>
            <button className="close" onClick={this.closeModal}>close</button>
          </div>
          
          <form className="modal-form">
            <input id="top" className="reg-input" placeholder="User Name" onChange={this._addUserName}/>
            <input className="reg-input" placeholder="City" onChange={this._addCity}/>
            <input className="reg-input" placeholder="Province or State" onChange={this._addProvOrState}/>
            <input className="reg-input" placeholder="Country" onChange={this._addCountry}/>
            <input className="reg-input" type="password" placeholder="Password" onChange={this._addPassword}/>
            <input className="reg-input" type="password" placeholder="confirm Password"onChange={this._confirmPassword}/>
            <button id="reg-submit" className="button" onClick={this._handleSubmit}>submit</button>

          </form>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;