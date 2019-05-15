import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
import TopBar from './header/TopBar';
import FindMyRecipes from './FindMyRecipes';
import CreateRecipe from './crud/CreateRecipe';
import EditRecipe from './crud/EditRecipe';
import DeleteRecipe from './crud/DeleteRecipe';
import InspireMe from './InspireMe';
import Footer from './footer/Footer';
import '../css/App.css';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="header">
          <TopBar />
        </div>
        <div className="content-spacer"></div>
        <div className="body-container">
          <Switch>
            <Route path="/" exact component={FindMyRecipes} />
            <Route path="/inspireme" exact component={InspireMe} />
            <Route path="/create" exact component={CreateRecipe} />
            <Route path="/edit/:id" exact component={EditRecipe} />
            <Route path="/delete/:id" exact component={DeleteRecipe} />
          </Switch>
        </div>
      </Router>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;