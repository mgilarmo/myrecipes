import React from 'react';

const renderSelect = (formProps) => (
  <div className="form-item">
    <div>
      <label>{formProps.label}</label>
      <select {...formProps.input}>
        <option value="" disabled>Select ...</option>
        {formProps.options.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
    <div className="form-item-error">
      {formProps.meta.touched && formProps.meta.error && <span>{formProps.meta.error}</span>}
    </div>
  </div>
)

export default renderSelect
