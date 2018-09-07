import React, { Component } from 'react';
import './EmailFormModal.css';

import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';

class EmailFormModal extends Component {

  state = {
    tracking: '',
    personalNote: ''
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
        nominatorName,
        nominatorEmail
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
            <p>{nominatorName}</p>
            <p>{nominatorEmail}</p>
          </div>
        
          <Input 
            label="Tracking Number"
            onChange={this.handleChange('tracking')}
            value={this.state.tracking}
          />
        
          <Input 
            label="Message"
            onChange={this.handleChange('personalNote')}
            value={this.state.personalNote}
          />

          <Button 
            title="SEND"
            onClick={() => onSend(this.state)}
          />
        
        </div>
      </Modal>
    )
  }
}

export default EmailFormModal;