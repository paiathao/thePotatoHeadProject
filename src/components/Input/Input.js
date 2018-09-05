import React from 'react';
import './Input.css';

export default ({
  label,
  placeholder,
  type,
  submitLabel,
  value,
  onChange
}) => {
  return (
    <div className="Input">
      <label htmlFor="input">{label}</label>
      <div className="input-container">
        <input 
          name="input" 
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
        />
        { submitLabel &&
          <button type="submit">{submitLabel}</button>
        }
      </div>
    </div>
  );
}