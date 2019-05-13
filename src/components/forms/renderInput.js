import React from 'react';

const renderInput = ({ input, label, placeholder, type, name, meta: { touched, error } }) => (
  <div className="form-item">
    <label>
      {label}
    </label>
    <div className={`${name}`}>
      <input 
        {...input} 
        placeholder={placeholder} 
        type={type} 
        autoComplete="off"
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default renderInput