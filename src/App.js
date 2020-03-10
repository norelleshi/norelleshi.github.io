import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Scroll from './components/scroll/scroll.component';
import Header from './components/header/header.component';
import MyworkPage from './pages/mywork/mywork.component';
import AboutMePage from './pages/about-me/about-me.component';

function App() {
  return (
    <div>  
      <Header />
      <Scroll>
        <Switch>
          <Route exact path='/' component={MyworkPage} />
          <Route path='/about-me' component={AboutMePage} />
        </Switch>
      </Scroll> 
    </div>
  );
}

export default App;
