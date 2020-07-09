import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../src/component/Dashboard/Landing';
require('dotenv').config({path: __dirname + '/.env'})


function App() {
  return (
    <div className="App">
    <Router>
          <div className="App">  
            {/* <ReactNotification />         */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/homepage" component={Landing} />
            {/* <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/loading" component={Loading} />
            </Switch> */}
          </div>
        </Router>
    </div>
  );
}

export default App;
