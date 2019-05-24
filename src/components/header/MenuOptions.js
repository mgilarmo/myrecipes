import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {toggleBoolean} from '../../actions/actions';
import '../../css/header/MenuOptions.css';


const MenuOptions = (props) => {
  return (
    <ul className="menu-options">
      <li>
        <label id="addRecipe" onClick={() => props.toggleBoolean('mobileMenu')}>
          <Link to={'/create'}>
            <i className="fas fa-plus" />
            <div>Add a Recipe</div>
          </Link>
        </label>
      </li>
      <li>
        <label 
          id="showAllRecipes"
          onClick={() => {
            props.toggleBoolean('showAllRecipes'); 
            props.toggleBoolean('mobileMenu')
          }}
        >
          <Link to='/'>
            <i className="fas fa-book-open" />
            <div>Show all Recipes</div>
          </Link>
        </label>
      </li>
      <li>
        <label id="inspireMe" onClick={() => props.toggleBoolean('mobileMenu')}>
          <Link to='/inspireme'>
            <i className="far fa-lightbulb" />
            <div>Inspire Me</div>
          </Link>
        </label>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    showAllRecipes: state.ui.showAllRecipes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleBoolean: stateToToggle => dispatch(toggleBoolean(stateToToggle))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuOptions);