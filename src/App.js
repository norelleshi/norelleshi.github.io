import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import MyworkPage from './pages/mywork/mywork.component';
import AboutMePage from './pages/about-me/about-me.component';

function App() {
  return (
    <div>     
      <Header />
      <Switch>
        <Route exact path='/react-portfolio' component={MyworkPage} />
        <Route path='/react-portfolio/about-me' component={AboutMePage} />
      </Switch>
    </div>
  );
}

export default App;
