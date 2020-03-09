import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import MyworkPage from './pages/mywork/mywork.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MyworkPage} />
      </Switch>
    </div>
  );
}

export default App;
