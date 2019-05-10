import React from 'react';
import {connect} from 'react-redux';
import {searchingRecipes} from '../../actions/actions';

import '../../css/header/SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="recipe-search">
      <input 
        type="text" 
        placeholder={props.placeholder}
        value={props.term}
        onChange={event => searchingRecipes(event.target.value)}
        autoFocus
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    term: state.ui.term
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchingRecipes: dispatch(searchingRecipes())
//   };
// };

export default connect(
  mapStateToProps, 
  {searchingRecipes}
)(SearchBar);