import React from 'react';
import {connect} from 'react-redux';
import {toggleBoolean} from '../../actions/actions';
import '../../css/header/MenuMobile.css';


class MenuMobile extends React.Component {

  componentWillUnmount() {
    this.props.toggleBoolean('mobileMenu');
  }

  render() {
    return (
      <i 
        className="fas fa-bars mobile-menu" 
        onClick={this.props.toggleBoolean('mobileMenu')} 
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleBoolean: stateToToggle => dispatch(toggleBoolean(stateToToggle))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MenuMobile);
