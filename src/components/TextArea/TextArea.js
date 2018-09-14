import React from 'react';
import './TextArea.css';

export default ({
  label,
  placeholder,
  value,
  childRef,
  onChange,
  name
}) => {
  return (
    <div className="TextArea">
      <label htmlFor="input">{label}</label>
      <div className="input-container">
        <textarea 
          name="input" 
          placeholder={placeholder}
          value={value}
          ref={childRef}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
}