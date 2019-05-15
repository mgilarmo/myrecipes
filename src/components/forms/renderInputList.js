import React from 'react';

const renderInputList = (formProps) => (
  <div className="form-list-item" key={formProps.key}>
    <div className="form-list-label-item">
      <label>
        {formProps.label}
      </label>
    </div>
    <div className="form-list-input-item">
      <input 
        {...formProps.input} 
        type={formProps.type} 
        data-id={formProps.dataId}
        autoComplete="off"
      />
    </div>
  </div>
)

export default renderInputList;