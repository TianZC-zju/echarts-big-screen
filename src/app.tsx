import React from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Config} from './pages/config';
import Resource from './pages/resource';
import Effect from './pages/effect';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/resource">
            <Resource/>
          </Route>
          <Route exact path="/effect">
            <Effect/>
          </Route>
          <Route exact path="/config">
            <Config/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
