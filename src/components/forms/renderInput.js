import React from 'react';

const renderInput = ({ input, label, placeholder, type, name, position, specifyUnit, meta: { touched, error } }) => (
  <div className="form-item">
    <label className={`${position}`}>
      {label}
    </label>
    <input 
      {...input} 
      className={`${position} ${name}`}
      placeholder={placeholder} 
      type={type} 
      autoComplete="off"
    />{specifyUnit}
    <div>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default renderInput;