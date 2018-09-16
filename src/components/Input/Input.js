import React from 'react';
import './Input.css';

export default ({
  label,
  placeholder,
  type,
  submitLabel,
  value,
  onChange,
  childRef,
  id,
  inputStyle,
  required,
}) => {
  return (
    <div className="Input">
      <label htmlFor="input">{label} { required && <span className="required">*</span> }</label>
      <div className="input-container">
        <input 
          name="input" 
          placeholder={placeholder}
          value={value}
          ref={childRef}
          type={type}
          onChange={onChange}
          style={inputStyle}
        />
        { submitLabel &&
          <button type="submit">{submitLabel}</button>
        }
      </div>
    </div>
  );
}