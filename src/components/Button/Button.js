import React from 'react';
import './Button.css';

export default ({ title, onClick }) => {
  return (
    <button 
      className="Button"
      onClick={onClick}
    >
      { title }
    </button>
  )
}
