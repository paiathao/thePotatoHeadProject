import React from 'react';
import './RadioGroup.css';

export default ({
  title,
  data,
  name,
  onChange,
  required,
}) => {
  return (
    <div className="RadioGroup">
      <p>{title}  { required && <span className="required">*</span> }</p>
      <div>
        { data.map((d, i) => (
          <div key={d.value}>
            <label htmlFor={d.value}>{d.label}</label>
            <input 
              type="radio"
              id={d.value}
              value={d.value}
              name={name}
              onChange={onChange(name)}
            />
          </div>
        )) }
      </div>
    </div>
  );
}