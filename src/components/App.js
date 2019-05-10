import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import TopBar from './header/TopBar';
import FindMyRecipes from './FindMyRecipes';
import InspireMe from './InspireMe';
import Footer from './footer/Footer';
import '../css/App.css';

const App = () => {
  return (
    <div>
      <div className="header">
        <TopBar />
      </div>
      <div className="content-spacer"></div>
      <div className="body-container">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={FindMyRecipes} />
            <Route path="/inspireme" exact component={InspireMe} />
          </div>
        </BrowserRouter>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;