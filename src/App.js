import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import Login from './components/login-component.js';
import Admin from './components/admin-component.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Login}/>
        <Route path='/admin' component={Admin}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
