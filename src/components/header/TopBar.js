import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import GoogleAuth from './GoogleAuth';
import Menu from './Menu';
import MenuOptions from './MenuOptions';
import '../../css/header/TopBar.css';

const TopBar = (props) => {

  return (
    <div className="header-container">
      <div className="topbar-grid">
        <div className="topbar-item-image">
          <Link to="/">
            <img alt="Basil Leaf" src="/images/BasilLeaf.jpg"/>
          </Link>
        </div>
        <div className="topbar-item-site">
          <Link to="/">
            My Recipes
          </Link>
        </div>
        <div className="topbar-item-search">
          <SearchBar 
            placeholder="Find a recipe . . ."
          />
        </div>
        <div className="topbar-item-menu">
          <Menu />
        </div>
        <div className="topbar-item-user">
          <GoogleAuth />
        </div>
      </div>
      <div className={`menu-mobile ${props.mobileMenu ? 'open' : 'closed'}`}>
        <MenuOptions />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mobileMenu: state.ui.mobileMenu
  }
};

export default connect(
  mapStateToProps
)(TopBar);