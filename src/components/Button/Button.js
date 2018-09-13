import React from 'react';
import './Button.css';

export default ({ title, onClick, style }) => {
  return (
    <button 
      className="Button"
      onClick={onClick}
      style={style}
    >
      { title }
    </button>
  )
}
