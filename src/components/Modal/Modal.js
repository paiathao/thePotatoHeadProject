import React from 'react';
import './Modal.css';

export default ({ visible, children }) => {
  if (visible) {
    return (
      <div className="modal-background">
        <div className="Modal">
          {children}
        </div>
      </div>
    )
  }
  return null;
}