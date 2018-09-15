import React, { Component } from 'react';
import './NumberSelect.css';

class NumberSelect extends Component {

  render() {
    const {
      min = 0,
      max,
      label,
      name,
      onChange,
      value
    } = this.props;
    return (
      <select 
        className="NumberSelect"
        onChange={onChange(name)}
        id={name}
      >
        <option selected disabled>{label}</option>
        { new Array(max - min + 1).fill(null).map((o, i) => (
          <option 
            key={i}
            value={i + min}
            selected={value === String(i + min)}
          >
            {i + min}
          </option>
        )) }
      </select>
    );
  }
}

export default NumberSelect;