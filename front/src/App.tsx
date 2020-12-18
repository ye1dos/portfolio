import React from 'react';
import './App.css';
import Lyrics from './components/lyrics'
import Search from './components/search'
import {Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/'>
        <Search/>
        <Lyrics/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
