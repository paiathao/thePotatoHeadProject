import React, { Component } from 'react';
import './EmailFormModal.css';

import Modal from '../Modal/Modal';
import Input from '../Input/Input';

class EmailFormModal extends Component {

  state = {
    tracking: '',
    message: ''
  }

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  }

  render() {
    const {
      visible,
      closeModal,
      onSend,
      nominator: {
        name,
        email
      }
    } = this.props;
    return (
      <Modal
        visible={visible}
      >
        <div className="EmailFormModal">

          <button onClick={closeModal}>cancel</button>

          <div>
            <span>To:</span>
            <p>{name}</p>
            <p>{email}</p>
          </div>
        
          <Input 
            label="Tracking Number"
            onChange={this.handleChange('tracking')}
            value={this.state.tracking}
          />
        
          <Input 
            label="Message"
            onChange={this.handleChange('message')}
            value={this.state.message}
          />

          <button 
            onClick={() => onSend(this.state)}
          >
          SEND
        </button>
        
        </div>
      </Modal>
    )
  }
}

export default EmailFormModal;