import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../src/component/Dashboard/Landing';
import Login from '../src/component/Autherization/Login';
import Register from './component/Autherization/Register';
import InstituteDashboard from './component/Institute/InstituteDashboard';
require('dotenv').config({path: __dirname + '/.env'})


function App() {
  return (
    <div className="App">
    <Router>
          <div className="App">  
            {/* <ReactNotification />         */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/homepage" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register_your_institue" component={Register} />
            <Switch>
              <Route exact path="/institutedashboard" component={InstituteDashboard} />
              {/* <PrivateRoute exact path="/" component={Loading} /> */}
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
