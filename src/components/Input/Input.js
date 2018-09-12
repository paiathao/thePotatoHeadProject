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
}) => {
  return (
    <div className="Input">
      <label htmlFor="input">{label}</label>
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