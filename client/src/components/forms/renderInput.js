import React from 'react';

const renderInput = (formProps) => (
  <div className="form-item">
    <div>
      <label className={`${formProps.position}`}>
        {formProps.label}
      </label>
      <input 
        {...formProps.input} 
        className={`${formProps.position} ${formProps.name}`}
        placeholder={formProps.placeholder} 
        type={formProps.type} 
        autoComplete="off"
      />{formProps.specifyUnit}
    </div>
    <div className="form-item-error">
      {formProps.meta.touched && formProps.meta.error && <span>{formProps.meta.error}</span>}
    </div>
  </div>
)

export default renderInput;