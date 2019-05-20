import React from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import WizardFormFourthPage from './WizardFormFourthPage';

import '../../css/forms/WizardForm.css';

class WizardForm extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {page: 1};
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    return (
      <div>
        {this.state.page === 1 && (
          <WizardFormFirstPage 
            initialValues={this.props.initialValues}
            onSubmit={this.nextPage} 
          />
        )}
        {this.state.page === 2 && (
          <WizardFormSecondPage
            initialValues={this.props.initialValues}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {this.state.page === 3 && (
          <WizardFormThirdPage
            initialValues={this.props.initialValues}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {this.state.page === 4 && (
          <WizardFormFourthPage
            initialValues={this.props.initialValues}
            previousPage={this.previousPage}
            onSubmit={this.props.onSubmit}
          />
        )}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
