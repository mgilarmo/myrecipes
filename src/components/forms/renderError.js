import React from 'react'

const renderError = ({error, touched}) => {
  if (touched && error) {
    return (
      <div>
        <div>
          {error}
        </div>
      </div>
    );
  }
};

export default renderError
