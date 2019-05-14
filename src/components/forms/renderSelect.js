import React from 'react';

const renderSelect = ({ input, label, options, meta: { touched, error } }) => (
  <div className="form-item">
    <label>{label}</label>
    <select {...input}>
      <option value="" disabled>Select ...</option>
      {options.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

export default renderSelect
