import React from 'react';
import './TextArea.css';

export default ({
  label,
  placeholder,
  value,
  childRef,
  onChange,
  name,
  required,
}) => {
  return (
    <div className="TextArea">
      <label htmlFor="input">{label}  { required && <span className="required">*</span> }</label>
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