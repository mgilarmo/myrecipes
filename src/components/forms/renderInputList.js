import React from 'react';

const renderInputList = ({input, label, type, name, 'data-id': dataId, id, className, key}) => (
  <div className="form-list-item" key={key}>
    <div className="form-list-label-item">
      <label>
        {label}
      </label>
    </div>
    <div className="form-list-input-item">
      <input 
        {...input} 
        type={type} 
        name={name}
        data-id={dataId}
        autoComplete="off"
      />
    </div>
  </div>
)

export default renderInputList;