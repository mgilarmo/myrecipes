import React from 'react';
import {connect} from 'react-redux';
import {toggleBoolean} from '../../actions/actions';
import '../../css/header/MenuOptions.css';


const MenuOptions = (props) => {
  return (
    <ul className="menu-options">
      <li>
        <label id="addRecipe" >
          <i className="fas fa-plus" />
          <div>Add a Recipe</div>
        </label>
      </li>
      <li>
        <label 
          id="showAllRecipes"
          onClick={props.toggleBoolean('showAllRecipes')}
        >
          <i className="fas fa-book-open" />
          <div>Show all Recipes</div>
        </label>
      </li>
      <li>
        <label id="inspireMe">
          <i className="far fa-lightbulb" />
          <div>Inspire Me</div>
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